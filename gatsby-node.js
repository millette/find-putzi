'use strict'

// core
const path = require('path')

const tralere = (byName, data, createPage, graphql) => {
  data[byName].group.forEach(async ({ fieldValue }) => {
    const context = {}
    context[byName] = fieldValue
    createPage({
      path: `/by/${byName}/${fieldValue}/`,
      component: path.resolve('./src/templates/by.js'),
      context
    })

    const xxx = await graphql(
      `
        query(
          $sexe: String
          $taille: String
          $degriffe: String
          $couleur: String
          $race: String
        ) {
          allAllCatsV5Json(
            filter: {
              noDeReference: { ne: null }
              sexe: { eq: $sexe }
              taille: { eq: $taille }
              degriffe: { eq: $degriffe }
              couleur: { eq: $couleur }
              race: { eq: $race }
            }
          ) {
            sexe: group(field: sexe) {
              fieldValue
              totalCount
            }

            taille: group(field: taille) {
              fieldValue
              totalCount
            }

            degriffe: group(field: degriffe) {
              fieldValue
              totalCount
            }

            couleur: group(field: couleur) {
              fieldValue
              totalCount
            }

            race: group(field: race) {
              fieldValue
              totalCount
            }
          }
        }
      `,
      context
    )

    const fv = fieldValue
    /*
    console.log('byName:', byName)
    console.log('fieldValue:', fieldValue)
    console.log('data:', xxx.data.allAllCatsV5Json.sexe)
    */

    let byName2

    for (byName2 in xxx.data.allAllCatsV5Json) {
      if (byName === byName2) {
        continue
      }
      // console.log('byName2:', byName2, xxx.data.allAllCatsV5Json[byName2])
      xxx.data.allAllCatsV5Json[byName2].forEach(({ fieldValue }) => {
        const ctx = { ...context }
        ctx[byName2] = fieldValue
        const p = `/by/${byName}/${fv}/${byName2}/${fieldValue}/`
        // console.log('PATH:', p, ctx)
        // console.log('CTX:', ctx)
        createPage({
          path: p,
          component: path.resolve('./src/templates/by.js'),
          context: ctx
        })
      })
    }
  })
}

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(`
    query {
      sexe: allAllCatsV5Json(filter: { noDeReference: { ne: null } }) {
        group(field: sexe) {
          fieldValue
        }
      }
      taille: allAllCatsV5Json(filter: { noDeReference: { ne: null } }) {
        group(field: taille) {
          fieldValue
        }
      }
      degriffe: allAllCatsV5Json(filter: { noDeReference: { ne: null } }) {
        group(field: degriffe) {
          fieldValue
        }
      }
      couleur: allAllCatsV5Json(filter: { noDeReference: { ne: null } }) {
        group(field: couleur) {
          fieldValue
        }
      }
      race: allAllCatsV5Json(filter: { noDeReference: { ne: null } }) {
        group(field: race) {
          fieldValue
        }
      }
    }
  `)

  let byName
  for (byName in data) {
    /*
    data[byName].group.forEach(async ({ fieldValue }) => {
      const context = {}
      context[byName] = fieldValue
      createPage({
        path: `/by/${byName}/${fieldValue}/`,
        component: path.resolve('./src/templates/by.js'),
        context
      })

      const xxx = await graphql(`
        query ($sexe: String, $taille: String, $degriffe: String, $couleur: String, $race: String) {
          allAllCatsV5Json(
            filter: {
              noDeReference: { ne: null }
              sexe: { eq: $sexe }
              taille: { eq: $taille }
              degriffe: { eq: $degriffe }
              couleur: { eq: $couleur }
              race: { eq: $race }
            }
          ) {
            sexe: group(field: sexe) {
              fieldValue
              totalCount
            }

            taille: group(field: taille) {
              fieldValue
              totalCount
            }

            degriffe: group(field: degriffe) {
              fieldValue
              totalCount
            }

            couleur: group(field: couleur) {
              fieldValue
              totalCount
            }

            race: group(field: race) {
              fieldValue
              totalCount
            }
          }
        }
      `, context)

      const fv = fieldValue
      // console.log('byName:', byName)
      // console.log('fieldValue:', fieldValue)
      // console.log('data:', xxx.data.allAllCatsV5Json.sexe)

      let byName2

      for (byName2 in xxx.data.allAllCatsV5Json) {
        if (byName === byName2) { continue }
        // console.log('byName2:', byName2, xxx.data.allAllCatsV5Json[byName2])
        xxx.data.allAllCatsV5Json[byName2].forEach(({ fieldValue }) => {
          const ctx = { ...context }
          ctx[byName2] = fieldValue
          const p = `/by/${byName}/${fv}/${byName2}/${fieldValue}/`
          console.log('PATH:', p, ctx)
          console.log('CTX:', ctx)
          createPage({
            path: p,
            component: path.resolve('./src/templates/by.js'),
            context: ctx
          })
        })
      }
    })
  */
    tralere(byName, data, createPage, graphql)
  }

  /*
  createPage({
    path: '/by/sex/Male/',
    component: path.resolve('./src/templates/by.js'),
    context: {
      byName: 'sex',
      byValue: 'Male'
    }
  })
  createPage({
    path: '/by/sex/Unknown/',
    component: path.resolve('./src/templates/by.js'),
    context: {
      byName: 'sex',
      byValue: 'Unknown'
    }
  })
  */
}
