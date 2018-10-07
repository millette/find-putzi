import React, { Fragment } from 'react'
import { Link, graphql } from 'gatsby'

const style = {
  border: 'thin blue solid',
  margin: '0.25rem',
  width: '45%',
  float: 'left'
}

export default ({ pageContext, data, location: { pathname } }) => {
  pathname = `/${pathname
    .split('/')
    .slice(-4)
    .join('/')}`

  const {
    sexe,
    taille,
    degriffe,
    couleur,
    race,
    allAllCatsV5Json: { totalCount, edges }
  } = data
  const { allAllCatsV5Json, ...facets } = data
  let suggestions
  let yo
  if (Object.keys(pageContext).length < 2) {
    const all = []
    const laza = (yo, o) =>
      all.push({
        ...o,
        yo
      })
    for (yo in facets) {
      if (!pageContext.yo) {
        facets[yo].group.forEach(laza.bind(null, yo))
      }
    }
    const suggestionsImp = all
      .sort((a, b) => {
        const ta = a.totalCount
        const tb = b.totalCount
        if (ta > tb) {
          return 1
        }
        if (ta < tb) {
          return -1
        }
        return 0
      })
      .filter(({ totalCount }) => totalCount < 25)

    suggestions = suggestionsImp.slice(
      0,
      suggestionsImp[5] && suggestionsImp[5].totalCount > 1 ? 5 : 8
    )
  }

  return (
    <div>
      <h1>{JSON.stringify(pageContext)}</h1>
      <h2>
        <Link to='/by/'>By...</Link>
      </h2>
      <p>Count: {totalCount}</p>
      {suggestions &&
        suggestions.length > 0 && (
        <div>
          <h3>Suggestions</h3>
          <ol>
            {suggestions.map(({ fieldValue, totalCount, yo }) => (
              <li key={`${yo}-${fieldValue}`}>
                <Link to={`${pathname}${yo}/${fieldValue}/`}>
                  {yo}: {fieldValue} ({totalCount})
                </Link>
              </li>
            ))}
          </ol>
        </div>
      )}

      <div>
        <h3>Tous</h3>
        {Object.keys(pageContext).length < 2 ? (
          <Fragment>
            {!pageContext.sexe && (
              <Fragment>
                <h4>Sexe</h4>
                <ul>
                  {sexe.group.map(({ fieldValue, totalCount }) => (
                    <li key={fieldValue}>
                      <Link to={`${pathname}sexe/${fieldValue}/`}>
                        {totalCount} {fieldValue}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}

            {!pageContext.taille && (
              <Fragment>
                <h4>Taille</h4>
                <ul>
                  {taille.group.map(({ fieldValue, totalCount }) => (
                    <li key={fieldValue}>
                      <Link to={`${pathname}taille/${fieldValue}/`}>
                        {totalCount} {fieldValue}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}

            {!pageContext.degriffe && (
              <Fragment>
                <h4>Dégriffé</h4>
                <ul>
                  {degriffe.group.map(({ fieldValue, totalCount }) => (
                    <li key={fieldValue}>
                      <Link to={`${pathname}degriffe/${fieldValue}/`}>
                        {totalCount} {fieldValue}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}

            {!pageContext.couleur && (
              <Fragment>
                <h4>Couleur</h4>
                <ul>
                  {couleur.group.map(({ fieldValue, totalCount }) => (
                    <li key={fieldValue}>
                      <Link to={`${pathname}couleur/${fieldValue}/`}>
                        {totalCount} {fieldValue}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}

            {!pageContext.race && (
              <Fragment>
                <h4>Race</h4>
                <ul>
                  {race.group.map(({ fieldValue, totalCount }) => (
                    <li key={fieldValue}>
                      <Link to={`${pathname}race/${fieldValue}/`}>
                        {totalCount} {fieldValue}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Fragment>
            )}
          </Fragment>
        ) : (
          <div>
            {edges.map(
              ({
                node: {
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
                }
              }) => (
                <div key={noDeReference} style={style}>
                  {imgs &&
                    imgs.map((src, i) => <img key={i} src={src} alt={name} />)}
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
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  query(
    $sexe: String
    $taille: String
    $degriffe: String
    $couleur: String
    $race: String
  ) {
    sexe: allAllCatsV5Json(
      filter: {
        noDeReference: { ne: null }
        sexe: { eq: $sexe }
        taille: { eq: $taille }
        degriffe: { eq: $degriffe }
        couleur: { eq: $couleur }
        race: { eq: $race }
      }
    ) {
      group(field: sexe) {
        fieldValue
        totalCount
      }
    }
    taille: allAllCatsV5Json(
      filter: {
        noDeReference: { ne: null }
        sexe: { eq: $sexe }
        taille: { eq: $taille }
        degriffe: { eq: $degriffe }
        couleur: { eq: $couleur }
        race: { eq: $race }
      }
    ) {
      group(field: taille) {
        fieldValue
        totalCount
      }
    }
    degriffe: allAllCatsV5Json(
      filter: {
        noDeReference: { ne: null }
        sexe: { eq: $sexe }
        taille: { eq: $taille }
        degriffe: { eq: $degriffe }
        couleur: { eq: $couleur }
        race: { eq: $race }
      }
    ) {
      group(field: degriffe) {
        fieldValue
        totalCount
      }
    }
    couleur: allAllCatsV5Json(
      filter: {
        noDeReference: { ne: null }
        sexe: { eq: $sexe }
        taille: { eq: $taille }
        degriffe: { eq: $degriffe }
        couleur: { eq: $couleur }
        race: { eq: $race }
      }
    ) {
      group(field: couleur) {
        fieldValue
        totalCount
      }
    }
    race: allAllCatsV5Json(
      filter: {
        noDeReference: { ne: null }
        sexe: { eq: $sexe }
        taille: { eq: $taille }
        degriffe: { eq: $degriffe }
        couleur: { eq: $couleur }
        race: { eq: $race }
      }
    ) {
      group(field: race) {
        fieldValue
        totalCount
      }
    }

    allAllCatsV5Json(
      limit: 48
      sort: { fields: [postingDate], order: DESC }
      filter: {
        noDeReference: { ne: null }
        sexe: { eq: $sexe }
        taille: { eq: $taille }
        degriffe: { eq: $degriffe }
        couleur: { eq: $couleur }
        race: { eq: $race }
      }
    ) {
      totalCount
      edges {
        node {
          name
          noDeReference
          sexe
          race
          taille
          couleur
          age
          postingDate
          degriffe
          imgs
          url
        }
      }
    }
  }
`
