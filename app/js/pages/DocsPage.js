'use strict'

import {Component}      from 'react'
import {Link}           from 'react-router'
import DocumentTitle    from 'react-document-title'

import Header           from '../components/Header'
import Footer           from '../components/Footer'
import CardLink         from '../components/CardLink'
import docs             from '../../docs.json'

class DocsPage extends Component {
  render() {
    const pageRows = [
      {
        title: 'Overview',
        items: ['what-is-blockstack', 'how-blockstack-works', 'blockstack-papers']
      },
      {
        title: 'Command Line Interface',
        items: ['installation', 'basic-usage', 'extended-usage']
      },
      {
        title: 'Naming',
        items: ['blockstack-vs-dns', 'blockstack-vs-namecoin', 'namespaces']
      },
      {
        title:'Identity',
        items: ['blockchain-identity', 'blockstack-profiles', 'identity-attestation']
      },
      {
        title: 'Misc',
        items: ['light-clients', 'faq', '']
      }
    ]

    /*
      {
        title: 'Developer Libraries',
        items: ['blockstack-profiles-js', 'blockstack-profiles-py', 'pybitcoin']
      },
    */

    return (
      <DocumentTitle title="Blockstack - Documentation">
        <div>
          <div className="container-fluid col-centered navbar-fixed-top bg-primary">
            <Header />
          </div>
          <section className="container-fluid spacing-container">
            <div className="container col-centered">
              <div className="container m-b-5">
                {pageRows.map((pageRow, rowIndex) => {
                  return (
                    <div key={rowIndex}>
                      {pageRow.title ?
                      <h1>{pageRow.title}</h1>
                      : null }
                      <div className="card-deck-wrapper">
                        <div className="card-deck m-b-3">
                        {pageRow.items.map((slug, columnIndex) => {
                          if (!docs.hasOwnProperty(slug)) {
                            slug = ''
                          }
                          if (slug === '') {
                            return (
                              <div key={columnIndex} className="card-2-of-3"></div>
                            )
                          } else {
                            const page = docs[slug]
                            return (
                              <CardLink key={columnIndex} href={`/docs/${slug}`}
                                title={page.title} body={page.description}
                                imageSrc={page.image} cardsPerRow={3} />
                            )
                          }
                        })}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </DocumentTitle>
    )
  }
}

export default DocsPage
