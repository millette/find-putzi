import React from 'react'
import { Link, graphql } from 'gatsby'

export default ({ data: { sex: { sex }, size: { size }, declawd: { declawd }, colors: { colors }, races: { races } } }) => {
  return (
    <div>
      <Link to='/'>With pictures</Link> <Link  to='/black/'>Only black cats</Link>
      <h2>By sex</h2>
      <ul>
        {sex.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>{totalCount} {fieldValue}</li>
        ))}
      </ul>


      <h2>By size</h2>
      <ul>
        {size.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>{totalCount} {fieldValue}</li>
        ))}
      </ul>


      <h2>Declawd?</h2>
      <ul>
        {declawd.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>{totalCount} {fieldValue}</li>
        ))}
      </ul>

      <h2>By color</h2>
      <ul>
        {colors.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>{totalCount} {fieldValue}</li>
        ))}
      </ul>

      <h2>By race</h2>
      <ul>
        {races.map(({ fieldValue, totalCount }) => (
          <li key={fieldValue}>{totalCount} {fieldValue}</li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
  query {
    sex: allAllCatsV4Json(
      sort: {fields: [g3___POSTING_DATE], order: DESC}
      filter: {
        g3: {
          No_de_R_f_rence: {
            ne: null
          }
        }
      }
    ) {
      sex: group(field: g3___Sexe) {
        fieldValue
        totalCount
      }
    }
    size: allAllCatsV4Json(
      sort: {fields: [g3___POSTING_DATE], order: DESC}
      filter: {
        g3: {
          No_de_R_f_rence: {
            ne: null
          }
        }
      }
    ) {
      size: group(field: g3___Taille) {
        fieldValue
        totalCount
      }
    }


    declawd: allAllCatsV4Json(
      sort: {fields: [g3___POSTING_DATE], order: DESC}
      filter: {
        g3: {
          No_de_R_f_rence: {
            ne: null
          }
        }
      }
    ) {
      declawd: group(field: g3___D_griff_) {
        fieldValue
        totalCount
      }
    }





    colors: allAllCatsV4Json(
      sort: {fields: [g3___POSTING_DATE], order: DESC}
      filter: {
        g3: {
          No_de_R_f_rence: {
            ne: null
          }
        }
      }
    ) {
      colors: group(field: g3___Couleur) {
        fieldValue
        totalCount
      }
    }
    races: allAllCatsV4Json(
      sort: {fields: [g3___POSTING_DATE], order: DESC}
      filter: {
        g3: {
          No_de_R_f_rence: {
            ne: null
          }
        }
      }
    ) {
      races: group(field: g3___Race) {
        fieldValue
        totalCount
      }
    }
  }
`
