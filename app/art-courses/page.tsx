import { Search, PaintbrushIcon as PaintBrush, Palette, Droplet, Eraser } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { HomeIcon, Zap, UserCircle, BookOpen, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function ArtCourses() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-indigo-50 min-h-screen pb-4">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
        </Link>
        <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png" alt="Art Courses Logo" width={40} height={40} className="w-10" />
        <div className="flex-1 relative">
          <Input 
            type="search" 
            placeholder="搜索美术课程" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </header>

      {/* Navigation Pills */}
      <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar">
        <Badge variant="secondary" className="bg-blue-100 text-blue-500 hover:bg-blue-200">
          全部课程
        </Badge>
        <Badge variant="secondary" className="whitespace-nowrap">国画</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">水彩画</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">素描</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">油画</Badge>
      </div>

      {/* Featured Art Courses */}
      <div className="p-4">
        <Card className="p-4">
          <h3 className="font-bold mb-4">热门美术课程</h3>
          <div className="grid grid-cols-3 gap-4">
            <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
              <PaintBrush className="h-6 w-6 text-red-500" />
              <span className="text-xs">国画</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
              <Droplet className="h-6 w-6 text-blue-500" />
              <span className="text-xs">水彩画</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
              <Eraser className="h-6 w-6 text-gray-500" />
              <span className="text-xs">素描</span>
            </Button>
          </div>
        </Card>
      </div>

      {/* Art Classes */}
      <div className="p-4 space-y-4">
        <h3 className="font-bold">美术课程</h3>
        <Card className="p-4">
          <div className="flex gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="国画入门" 
              width={80} 
              height={80} 
              className="rounded object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold">国画入门</div>
              <div className="text-sm text-gray-600">适合年龄：8-12岁</div>
              <div className="text-sm text-gray-600">每周二、四 16:00-17:30</div>
              <Badge variant="secondary" className="mt-2">热门</Badge>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="水彩画技法" 
              width={80} 
              height={80} 
              className="rounded object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold">水彩画技法</div>
              <div className="text-sm text-gray-600">适合年龄：10-15岁</div>
              <div className="text-sm text-gray-600">每周三、五 15:00-16:30</div>
              <Badge variant="secondary" className="mt-2">新开课</Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Benefits of Art */}
      <div className="p-4 bg-gradient-to-r from-indigo-100 to-blue-200 mx-4 rounded-lg mt-4">
        <h3 className="font-bold mb-4">学习美术的好处</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <Palette className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
            <span>培养创造力和想象力</span>
          </li>
          <li className="flex items-start gap-2">
            <Palette className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
            <span>提高观察力和专注力</span>
          </li>
          <li className="flex items-start gap-2">
            <Palette className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
            <span>增强自信心和表达能力</span>
          </li>
        </ul>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200 mx-4 mt-4 rounded-lg">
        <div className="grid grid-cols-5 px-2 py-1">
          <Link href="/" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <HomeIcon className="h-5 w-5" />
              <span className="text-xs">首页</span>
            </Button>
          </Link>
          <Link href="/activities" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <Zap className="h-5 w-5" />
              <span className="text-xs">活动</span>
            </Button>
          </Link>
          <Link href="/academic-advancement" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <UserCircle className="h-5 w-5" />
              <span className="text-xs">我的学习</span>
            </Button>
          </Link>
          <Link href="/course-guidance" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <BookOpen className="h-5 w-5" />
              <span className="text-xs">课程辅导</span>
            </Button>
          </Link>
          <Link href="/my-courses" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <ShoppingCart className="h-5 w-5" />
              <span className="text-xs">我的课程</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

