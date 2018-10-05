import React from 'react'
import { Link, graphql } from 'gatsby'

const style = {
  width: '45%',
  float: 'left'
}

export default ({ data: { allAllCatsV5Json: { totalCount, edges } } }) => {
  const zz = edges
    .map(({ node }) => {
      const imgs = node.imgs
        ? node.imgs.filter(
          x => x !== 'http://g.petango.com/shared/Photo-Not-Available-cat.gif'
        )
        : []
      return {
        ...node,
        imgs
      }
    })
    .filter(({ imgs }) => !imgs || !imgs.length)

  // <pre>{JSON.stringify(zz, null, '  ')}</pre>
  return (
    <div>
      <p>
        oh my! We have {totalCount} black cats. See{' '}
        <Link to='/'>cats with picture</Link> and all{' '}
        <Link to='/by/'>categories</Link>.
      </p>
      {zz.map(
        ({
          imgs,
          url,
          name,
          sexe,
          noDeReference,
          postingDate,
          taille,
          couleur,
          race,
          age,
          degriffe
        }) => (
          <div style={style}>
            <h2>
              {name} ({sexe}) <small>#{noDeReference}</small>
            </h2>
            {postingDate} {taille} {couleur} {race}
            {age && ` de ${age} ans`}
            <br />
            Dégriffé? {degriffe}
            <br />
            <a href={url}>Lien original</a>
          </div>
        )
      )}
    </div>
  )
}

export const query = graphql`
  query {
    allAllCatsV5Json(
      filter: { couleur: { eq: "Black" }, race: { eq: "Domestic Shorthair" } }
      sort: { fields: [postingDate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          imgs
          name
          noDeReference
          espece
          sexe
          race
          taille
          couleur
          degriffe
          postingDate
          age
          url
        }
      }
    }
  }
`
