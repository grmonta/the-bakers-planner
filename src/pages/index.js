import React from "react"

import Layout from "../components/layout/layout"
import Header from "../components/layout/header"
import PageTitle from "../components/layout/pageTitle"
import PageContent from "../components/layout/pageContent"

export default () => (
  <Layout>
    <Header></Header>
    <PageTitle>Welcome</PageTitle>
    <PageContent>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro veniam
      doloremque laborum minima a hic, incidunt, modi optio odio debitis minus
      natus laboriosam nam. <br /> Quidem, iure impedit! <br />
      Sapiente, maxime incidunt, perferendis, distinctio laudantium a
      necessitatibus tenetur repellendus repellat in corporis nesciunt
      cupiditate dolorem laboriosam praesentium dolor possimus deserunt itaque!{" "}
      <br />
      Voluptas aut aliquam enim pariatur minus labore ea explicabo delectus
      omnis non temporibus exercitationem, at dolor id sed officia. Quam eum
      officia, dolore, alias atque praesentium voluptatem ipsum sed nisi
      cupiditate officiis tempora voluptatum ipsam distinctio eius excepturi
      laudantium ab cum natus? <br /> Dolore natus, qui atque itaque amet
      explicabo cum impedit.
    </PageContent>
  </Layout>
)
