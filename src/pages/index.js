import { Component } from "react"
import { Row, Col } from "antd"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MainTemplate from "@/theme/main";
import { withTranslation } from "react-i18next";

class Home extends Component {

  render(){
    return (
      <Row>
        <Col xs={24}>
          {this.props.t('home')}
        </Col>
      </Row>
    )
  }
}

Home = withTranslation()(Home)

Home.getLayout = (page) => (
  <MainTemplate>
    {page}
  </MainTemplate>
)

export async function getServerSideProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
    }
  }
}

export default Home
