import React from 'react'
import { Link, graphql } from 'gatsby'

export default ({
  data: {
    sex: { sex },
    size: { size },
    declawd: { declawd },
    colors: { colors },
    races: { races }
  }
}) => {
  return (
    <div>
      <Link to='/'>With pictures</Link>{' '}
      <Link to='/black/'>Only black cats</Link>
      <h2>By sex</h2>
      <ul>
        {sex.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            {totalCount} {fieldValue}
          </li>
        ))}
      </ul>
      <h2>By size</h2>
      <ul>
        {size.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            {totalCount} {fieldValue}
          </li>
        ))}
      </ul>
      <h2>Declawd?</h2>
      <ul>
        {declawd.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            {totalCount} {fieldValue}
          </li>
        ))}
      </ul>
      <h2>By color</h2>
      <ul>
        {colors.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            {totalCount} {fieldValue}
          </li>
        ))}
      </ul>
      <h2>By race</h2>
      <ul>
        {races.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>
            {totalCount} {fieldValue}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    sex: allAllCatsV5Json(
      sort: { fields: [postingDate], order: DESC }
      filter: { noDeReference: { ne: null } }
    ) {
      sex: group(field: sexe) {
        fieldValue
        totalCount
      }
    }
    size: allAllCatsV5Json(
      sort: { fields: [postingDate], order: DESC }
      filter: { noDeReference: { ne: null } }
    ) {
      size: group(field: taille) {
        fieldValue
        totalCount
      }
    }

    declawd: allAllCatsV5Json(
      sort: { fields: [postingDate], order: DESC }
      filter: { noDeReference: { ne: null } }
    ) {
      declawd: group(field: degriffe) {
        fieldValue
        totalCount
      }
    }

    colors: allAllCatsV5Json(
      sort: { fields: [postingDate], order: DESC }
      filter: { noDeReference: { ne: null } }
    ) {
      colors: group(field: couleur) {
        fieldValue
        totalCount
      }
    }
    races: allAllCatsV5Json(
      sort: { fields: [postingDate], order: DESC }
      filter: { noDeReference: { ne: null } }
    ) {
      races: group(field: race) {
        fieldValue
        totalCount
      }
    }
  }
`
