import React, { useEffect } from 'react'
import styled from 'styled-components'
import jquery from 'jquery'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import "animate.css"

const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #FFF;
`

const InnerSection = styled.main`
  padding: 0 0 100px;
`

const Apps = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  @media screen and (max-width:1280px){
    display: flex;
    flex-wrap: wrap;
  }
`

const Item = styled.div`
  // @media screen and (max-width:750px){
  //   margin: 80px 0 0;
  // }
  &.ani1 {
    // animation-duration: 2s !important;
    // animation-delay: 1s;
    // animation-iteration-count : infinite;
  }
  &.ani2 {
    animation-delay: 0.3s;
  }
  &.ani3 {
    animation-delay: 0.6s;
  }
  &.ani4 {
    animation-delay: 0.9s;
  }
  margin: 0 30px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
 
  @media screen and (min-width:1280px){
    &:nth-child(1) {
      margin: 0 30px 0 0;
    }
    &:nth-child(4) {
      margin: 0 0 0 30px;
    }
  }
  @media screen and (min-width:1024px) and (max-width:1280px){
    margin: 0 20px;
  }
  h5{
    font-size: 20px;
    color: #282828;
    text-align: center;
    margin: 24px 0 14px;
  }
  p {
    font-size: 15px;
    color: #5C5C5C;
    text-align: center;
    line-height: 24px;
    width: 276px;
    @media screen and (min-width:1024px) and (max-width:1280px){
      width: 196px;
    }
    @media screen and (min-width:1280px) and (max-width:1295px){
      width: 270px;
    }
  }
`

export default function() {

  const { Pcxmodule, Dexmodule, Acrosschain, Relaymodule } = useStaticQuery(graphql`
    query {
      Pcxmodule: file(relativePath: { eq: "Pcxmodule.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Dexmodule: file(relativePath: { eq: "Dexmodule.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Acrosschain: file(relativePath: { eq: "Acrosschain.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Relaymodule: file(relativePath: { eq: "Relaymodule.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  useEffect(()=>{

    jquery(document).on("mousewheel DOMMouseScroll", function (event) {
      const delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  
                  (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));             
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      if(scrollTop > 1260 && scrollTop < 2620)  {
        jquery(".ani1").addClass("animate__fadeInUp");
        jquery(".ani2").addClass("animate__fadeInUp");
        jquery(".ani3").addClass("animate__fadeInUp");
        jquery(".ani4").addClass("animate__fadeInUp");
        console.log(scrollTop)
      } else {
        jquery(".ani1").removeClass("animate__fadeInUp");
        jquery(".ani2").removeClass("animate__fadeInUp");
        jquery(".ani3").removeClass("animate__fadeInUp");
        jquery(".ani4").removeClass("animate__fadeInUp");
      }
    });
   
  })

  return (
    <OuterSection>
      <InnerSection>
        <Apps>
          <Item key="amache1" className="ani1 animate__animated " >
            <Img fixed={Pcxmodule.childImageSharp.fixed} />
            <h5>PCX 模块</h5>
            <p>基于原生资产 PCX 的运作程序。包含 PCX 质押挖矿，支付手续费，参与链上治理，发放跨链挖矿奖励，用于 BTC 金融衍生抵押等。</p>
          </Item>
          <Item key="amache2" className="ani2  animate__animated" >
            <Img fixed={Dexmodule.childImageSharp.fixed} />
            <h5>DEX 模块</h5>
            <p>在 ChainX 链上发生的不同资产之间的交易。促进异链资产快速流通且能最大化的节省交易费用。</p>
          </Item>
          <Item key="amache3" className="ani3  animate__animated" >
            <Img fixed={Acrosschain.childImageSharp.fixed} />
            <h5>跨链模块</h5>
            <p>异链资产及 X-Token 在进入或者转出 ChainX 网络时用到的模块。包括跨链交易验证系统，链上铸币程序，信托程序以及 X-Token 充提程序等。</p>
          </Item>
          <Item key="amache4" className="ani4  animate__animated" >
            <Img fixed={Relaymodule.childImageSharp.fixed} />
            <h5>中继模块</h5>
            <p>ChainX 网络与外界各原链传递信息及辅助验证的主要窗口。包含更新原链信息程序，原链监听程序及 ChainX 跨链信息收集传递程序等。</p>
          </Item>
        </Apps>
      </InnerSection>
    </OuterSection>
  )
}
