import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Banner from "../components/banner"
import Feature from "../components/feature"
import Testimonial from "../components/testimonial"
import Subscribe from "../components/subscribe"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Feature />
    <Testimonial />
    <Subscribe />
  </Layout>
)

export default IndexPage
