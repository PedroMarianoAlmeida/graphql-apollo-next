const regularAPI = async () => {
  const data = await fetch('https://strapi-tests-pedro-programmer.herokuapp.com/teams');

  const result = await data.json()
  return result;
}

const graphqlAPI = async () => {
  const data = await fetch('https://strapi-tests-pedro-programmer.herokuapp.com/graphql', {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
        query {
          teams {
            Name
            Location
          }
        }
      `
    })
  });

  const result = await data.json()
  return result.data;
}

export default function Home(props) {
  console.log('regular API: ',props.regularAPI)
  console.log('GraphQL API: ',props.graphqlAPI)
  
  return (
    <div>
        <h1>Test</h1>
    </div>
  )
}

export const getServerSideProps = async () => {
  const myRegularAPI = await regularAPI();
  const myGraphqlAPI = await graphqlAPI();

  return { props: {regularAPI: myRegularAPI, graphqlAPI: myGraphqlAPI} };
}
