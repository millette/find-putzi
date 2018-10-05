import React from 'react'
import { Link, graphql } from 'gatsby'

const style = {
  width: '45%',
  float: 'left'
}

export default ({ data: { allAllCatsV4Json: { totalCount, edges } } }) => {
  const zz = edges.map(({ node }) => {
    const imgs = node.imgs
      ? node.imgs.filter((x) => x !== 'http://g.petango.com/shared/Photo-Not-Available-cat.gif')
      : []
    return {
      ...node,
      imgs
    }
  })
  .filter(({ imgs }) => imgs && imgs.length)

  // <pre>{JSON.stringify(zz, null, '  ')}</pre>
  return (
    <div>
      <p>oh my! We have {totalCount} in total.
      See <Link to='/black/'>black cats only (no picture)</Link> and all <Link to='/by/'>categories</Link>.
      </p>
      {zz.map(({ imgs, url, g3 }) => (
        <div style={style}>
          {imgs.map((i) => (
            <img src={i} alt={g3.name} />
          ))}
          <h2>{g3.name} ({g3.Sexe}) <small>#{g3.No_de_R_f_rence}</small></h2>
          {g3.POSTING_DATE} {g3.Taille} {g3.Couleur} {g3.Race}{g3._ge && ` de ${g3._ge} ans`}<br />
          Dégriffé? {g3.D_griff_}<br />
          <a href={url}>Lien original</a>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query {
    allAllCatsV4Json (
      sort: {
        fields: [g3___POSTING_DATE]
        order: DESC
      }
    ) {
      totalCount
      edges {
        node {
          imgs
          g3 {
            name
            No_de_R_f_rence
            Esp_ce
            Sexe
            Race
            Taille
            Couleur
            D_griff_
            POSTING_DATE
            _ge
          }
          url
        }
      }
    }
  }
`
