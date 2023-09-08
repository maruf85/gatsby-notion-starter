import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Layout>
        About page
      </Layout>
    </main>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>About Page</title>
