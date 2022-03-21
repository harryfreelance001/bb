import * as React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  const Bolubutter = data.Bolubutter.edges
  const Hampers = data.Hampers.edges

  return (
    <Layout>
      <Seo
        title="bolubutter.id"
        description="♥ Baked Specially for You ♥ Order now for special price!"
        ogimage="https://i.ibb.co/2qrmQtV/choco-crunch.jpg"
      />
      <div className="max-w-2xl px-4 pb-8 mx-auto text-center">
        <div className="grid grid-cols-2 mt-6 gap-x-12 md:mt-8">
          <div className="col-span-2 md:col-span-1">
            {/* BOLUBUTTER SERIES */}
            <h5 className="mb-6 text-sm font-medium uppercase text-secondary">
              ★ Bolubutter Series ★
            </h5>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {Bolubutter.map(product => {
                return (
                  <div className="col-span-1" key={product.node.id}>
                    <GatsbyImage
                      image={
                        product.node.productImage.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt={product.node.productName}
                      className="mb-2 rounded"
                    />
                    <div className="flex justify-between mb-2 text-sm text-secondary">
                      <span className="font-medium">
                        {product.node.productName}
                      </span>
                      <span className="font-light">
                        {product.node.productPrice}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
            <a
              href="https://wa.me/6285386349888?text=Hi%20kak%2C%20saya%20mau%20pesan%20bolubutter"
              className="block px-8 py-3 mt-8 text-lg rounded-full bg-secondary hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 682 682.66669"
                fill="currentColor"
                className="inline w-6 h-6 mr-2 text-primary"
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0"
                  ></path>
                </g>
              </svg>
              Order via Whatsapp
            </a>
          </div>
          <div className="col-span-2 md:col-span-1">
            {/* HAMPERS SERIES */}
            <h5 className="mt-16 mb-6 text-sm font-medium uppercase text-secondary md:mt-0">
              ★ Hampers Series ★
            </h5>
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {Hampers.map(product => {
                return (
                  <div className="col-span-1" key={product.node.id}>
                    <GatsbyImage
                      image={
                        product.node.productImage.localFile.childImageSharp
                          .gatsbyImageData
                      }
                      alt={product.node.productName}
                      className="mb-2 rounded"
                    />
                    <div className="flex justify-between mb-2 text-sm text-secondary">
                      <span className="font-medium">
                        {product.node.productName}
                      </span>
                      <span className="font-light">
                        {product.node.productPrice}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
            <a
              href="https://wa.me/6285386349888?text=Hi%20kak%2C%20saya%20mau%20pesan%20hampers"
              className="block px-8 py-3 mt-8 text-lg rounded-full bg-secondary hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 682 682.66669"
                fill="currentColor"
                className="inline w-6 h-6 mr-2 text-primary"
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m544.386719 93.007812c-59.875-59.945312-139.503907-92.9726558-224.335938-93.007812-174.804687 0-317.070312 142.261719-317.140625 317.113281-.023437 55.894531 14.578125 110.457031 42.332032 158.550781l-44.992188 164.335938 168.121094-44.101562c46.324218 25.269531 98.476562 38.585937 151.550781 38.601562h.132813c174.785156 0 317.066406-142.273438 317.132812-317.132812.035156-84.742188-32.921875-164.417969-92.800781-224.359376zm-224.335938 487.933594h-.109375c-47.296875-.019531-93.683594-12.730468-134.160156-36.742187l-9.621094-5.714844-99.765625 26.171875 26.628907-97.269531-6.269532-9.972657c-26.386718-41.96875-40.320312-90.476562-40.296875-140.28125.054688-145.332031 118.304688-263.570312 263.699219-263.570312 70.40625.023438 136.589844 27.476562 186.355469 77.300781s77.15625 116.050781 77.132812 186.484375c-.0625 145.34375-118.304687 263.59375-263.59375 263.59375zm144.585938-197.417968c-7.921875-3.96875-46.882813-23.132813-54.148438-25.78125-7.257812-2.644532-12.546875-3.960938-17.824219 3.96875-5.285156 7.929687-20.46875 25.78125-25.09375 31.066406-4.625 5.289062-9.242187 5.953125-17.167968 1.984375-7.925782-3.964844-33.457032-12.335938-63.726563-39.332031-23.554687-21.011719-39.457031-46.960938-44.082031-54.890626-4.617188-7.9375-.039062-11.8125 3.476562-16.171874 8.578126-10.652344 17.167969-21.820313 19.808594-27.105469 2.644532-5.289063 1.320313-9.917969-.664062-13.882813-1.976563-3.964844-17.824219-42.96875-24.425782-58.839844-6.4375-15.445312-12.964843-13.359374-17.832031-13.601562-4.617187-.230469-9.902343-.277344-15.1875-.277344-5.28125 0-13.867187 1.980469-21.132812 9.917969-7.261719 7.933594-27.730469 27.101563-27.730469 66.105469s28.394531 76.683594 32.355469 81.972656c3.960937 5.289062 55.878906 85.328125 135.367187 119.648438 18.90625 8.171874 33.664063 13.042968 45.175782 16.695312 18.984374 6.03125 36.253906 5.179688 49.910156 3.140625 15.226562-2.277344 46.878906-19.171875 53.488281-37.679687 6.601563-18.511719 6.601563-34.375 4.617187-37.683594-1.976562-3.304688-7.261718-5.285156-15.183593-9.253906zm0 0"
                  ></path>
                </g>
              </svg>
              Order via Whatsapp
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const data = graphql`
  query MyQuery {
    Bolubutter: allContentfulProduct(
      filter: { productTag: { eq: "bolubutter" } }
      sort: { fields: productPrice, order: ASC }
    ) {
      edges {
        node {
          id
          productName
          productPrice
          productTag
          productImage {
            localFile {
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP], quality: 40)
              }
            }
          }
        }
      }
    }
    Hampers: allContentfulProduct(
      filter: { productTag: { eq: "hampers" } }
      sort: { fields: productPrice, order: ASC }
    ) {
      edges {
        node {
          id
          productName
          productPrice
          productTag
          productImage {
            localFile {
              childImageSharp {
                gatsbyImageData(formats: [AUTO, WEBP], quality: 40)
              }
            }
          }
        }
      }
    }
  }
`
