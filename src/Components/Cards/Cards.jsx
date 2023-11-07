import Card from './Card/Card'
import PostFamous from './PostFamous/PostFamous'

export default function Cards() {
  return (
    <div className="w-4/5 flex flex-col justify-center items-center gap-2">
        <PostFamous/>
        <Card link="https://twitter.com/goldenlibraries?t=qbJuO5vxrOLbH22qZQUMoQ&s=09" nameCard="Twitter"/>
        <Card link="https://t.co/UpoHj1qtSF" nameCard="Instagram"/>
        <Card link="https://t.co/ssIQPQRvM4" nameCard="Tiktok"/>
        <Card link="https://t.co/d2TANUgUVl" nameCard="Wish List - Amazon"/>
        <Card link="mailto:livrosedonuts@gmail.com" nameCard="Contate-me"/>
    </div>
  )
}
