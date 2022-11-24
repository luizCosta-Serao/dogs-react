import React from 'react'
import { STATS_GET } from '../../api'
import useFetch from '../../Hooks/useFetch'
import Head from '../Helper/Head'
import Loading from '../Helper/Loading'
import Error from '../Helper/Error'
const UserStatsGraphs = React.lazy(() => import("./UserStatsGraphs") )

const UserStats = () => {
  const {data, loading, error, request} = useFetch()
  React.useEffect(() => {
    async function getData() {
      const token = window.localStorage.getItem("token")
      const {url, options} = STATS_GET(token)
      const {response, json} = await request(url, options)
      console.log(response)
      console.log(json)
    }
    getData()
  },[request])
  console.log(data)
  
  if(loading) return <Loading />
  if(error) return <Error error={error} />
  if(data)
  return (
    <React.Suspense fallback={<div></div>}>
      <Head title="Estatísticas"/>
      <UserStatsGraphs data={data}/>
    </React.Suspense>
  )
  else return null
}

export default UserStats