import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { VideoItem } from '../components/VideoItem'
import { VideoItemAPIResponse } from '../interfaces/server/server'
import { api } from '../server/fake_api'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [videosFromAPI, setVideosFromAPI] = useState<VideoItemAPIResponse[]>([])
  useEffect(() => {
    api.get_video_list().then(video_list => {
      setVideosFromAPI(video_list)
    })
  }, [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-row'>
        {videosFromAPI.map(video => <VideoItem title={video.title} url={video.url} thumbnail={video.thumbnail} creator={video.creator}/>)}
      </main>
    </div>
  )
}

export default Home
