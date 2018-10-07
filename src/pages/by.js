import React from 'react'
import { Link, graphql } from 'gatsby'

const couleur = {
  Butterscotch: '#c67941',
  Charcoal: '#1b0227',
  Cream: '#c9bb53',
  Rust: '#df6b2b'
}

const colorStyle = fieldValue => ({
  backgroundColor: couleur[fieldValue] || fieldValue,
  transformOrigin: '50%',
  padding: '0.25rem',
  margin: '0.25rem 0.25rem 0.25rem 9rem',
  listStyle: 'none'
})

export default ({
  data: {
    sexe: { sexe },
    taille: { taille },
    degriffe: { degriffe },
    couleur: { couleur },
    race: { race }
  }
}) => {
  return (
    <div>
      <Link to='/'>With pictures</Link>{' '}
      <Link to='/black/'>Only black cats</Link>
      <h2>By sex</h2>
      <ul>
        {sexe.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            <Link to={`/by/sexe/${fieldValue}/`}>
              {totalCount} {fieldValue}
            </Link>
          </li>
        ))}
      </ul>
      <h2>By taille</h2>
      <ul>
        {taille.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            <Link to={`/by/taille/${fieldValue}/`}>
              {totalCount} {fieldValue}
            </Link>
          </li>
        ))}
      </ul>
      <h2>Declawd?</h2>
      <ul>
        {degriffe.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            <Link to={`/by/degriffe/${fieldValue}/`}>
              {totalCount} {fieldValue}
            </Link>
          </li>
        ))}
      </ul>
      <h2>By color</h2>
      <ul>
        {couleur.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue} style={colorStyle(fieldValue)}>
            <Link to={`/by/couleur/${fieldValue}/`}>
              <span style={{ marginLeft: '-9rem' }}>
                {totalCount} {fieldValue}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <h2>By race</h2>
      <ul>
        {race.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            <Link to={`/by/race/${fieldValue}/`}>
              {totalCount} {fieldValue}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    sexe: allAllCatsV5Json(filter: { noDeReference: { ne: null } }) {
      sexe: group(field: sexe) {
        fieldValue
        totalCount
      }
    }
    taille: allAllCatsV5Json(filter: { noDeReference: { ne: null } }) {
      taille: group(field: taille) {
        fieldValue
        totalCount
      }
    }
    degriffe: allAllCatsV5Json(filter: { noDeReference: { ne: null } }) {
      degriffe: group(field: degriffe) {
        fieldValue
        totalCount
      }
    }
    couleur: allAllCatsV5Json(filter: { noDeReference: { ne: null } }) {
      couleur: group(field: couleur) {
        fieldValue
        totalCount
      }
    }
    race: allAllCatsV5Json(filter: { noDeReference: { ne: null } }) {
      race: group(field: race) {
        fieldValue
        totalCount
      }
    }
  }
`
