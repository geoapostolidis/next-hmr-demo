import { memo } from "react"
import { Layout, Row, Col } from "antd"
import HeaderContent from "@/components/header";
import styled from "styled-components";
import { appWithTranslation } from 'next-i18next';

const { Header, Sider, Content } = Layout

const CustomHeader = styled(Header)`
  text-align: center;
  color: #37474F;
  height: 80px;
  padding-inline: 0px;
  line-height: 80px;
  background-color: #FFFFFF;
  border-bottom: 1px solid;
  border-color: #E3E7EC;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  /* small screens */
  @media screen and (max-width: 576px) {
    &.categories {
      min-height: 200px;
      height: auto;
      position: relative;
    }
    &.home {
      height: 290px;
      min-height: unset;
      position: relative;
    }
  }
`

const CartArea = styled(Col)`
  position: fixed;
  top: 80px;
  right: 0;
  z-index: 1;
  width: 100%;
`

const MainContant = styled(Content)`
  text-align: center;
  color: #384049;
  background-color: #F6F6F6;
  padding-top: 80px;

`

const MainLayout = styled(Layout)`
  min-height: 100vh;
`

const RightSideBar = styled(Sider)`
  text-align: center;
  min-height: calc(100vh - 80px);
  color: #304052 !important;
  background-color: #FFFFFF !important;
`

function MainTemplate({ children, categories }) {

  return (
    <MainLayout>
      <CustomHeader><HeaderContent /></CustomHeader>
      <Layout>
        <MainContant>
          <Row style={{width: '100%'}}>
            <Col xs={24} sm={18}>
              {children}    
            </Col>
            <CartArea xs={0} sm={6}>
              <RightSideBar width='100%'>Sider</RightSideBar>
            </CartArea>
          </Row>
        </MainContant>
      </Layout>
    </MainLayout>
  )
}

export default memo(appWithTranslation(MainTemplate))