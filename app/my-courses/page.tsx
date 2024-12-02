import { Search, BookOpen, Play, Clock, CheckCircle, ShoppingCart, HomeIcon, Zap, UserCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from 'next/link'

export default function MyCourses() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-indigo-50 min-h-screen pb-4">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
        </Link>
        <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png" alt="My Courses Logo" width={40} height={40} className="w-10" />
        <div className="flex-1 relative">
          <Input 
            type="search" 
            placeholder="搜索我的课程" 
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
        <Badge variant="secondary" className="whitespace-nowrap">进行中</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">已完成</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">收藏</Badge>
      </div>

      {/* Course Progress Overview */}
      <div className="p-4">
        <Card className="p-4">
          <h3 className="font-bold mb-4">学习进度概览</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">总体进度</span>
                <span className="text-sm font-medium">65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '65%'}}></div>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <span>已完成课程: 3</span>
              <span>进行中课程: 2</span>
            </div>
          </div>
        </Card>
      </div>

      {/* My Courses List */}
      <div className="p-4 space-y-4">
        <h3 className="font-bold">我的课程</h3>
        <Card className="p-4">
          <div className="flex gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="趣味数学" 
              width={80} 
              height={80} 
              className="rounded object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold">趣味数学</div>
              <div className="text-sm text-gray-600 mb-2">进度: 75%</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-500 h-2.5 rounded-full" style={{width: '75%'}}></div>
              </div>
              <Button variant="outline" size="sm" className="mt-2">
                <Play className="h-4 w-4 mr-1" /> 继续学习
              </Button>
            </div>
          </div>
        </Card>
        <Card className="p-4">
          <div className="flex gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="英语阅读" 
              width={80} 
              height={80} 
              className="rounded object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold">英语阅读</div>
              <div className="text-sm text-gray-600 mb-2">进度: 40%</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-yellow-500 h-2.5 rounded-full" style={{width: '40%'}}></div>
              </div>
              <Button variant="outline" size="sm" className="mt-2">
                <Play className="h-4 w-4 mr-1" /> 继续学习
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Completed Courses */}
      <div className="p-4 bg-gradient-to-r from-indigo-100 to-blue-200 mx-4 rounded-lg mt-4">
        <h3 className="font-bold mb-4">已完成的课程</h3>
        <div className="space-y-2">
          <div className="flex items-center gap-2 bg-white p-2 rounded">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>基础语文</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>科学实验入门</span>
          </div>
          <div className="flex items-center gap-2 bg-white p-2 rounded">
            <CheckCircle className="h-5 w-5 text-green-500" />
            <span>美术创作基础</span>
          </div>
        </div>
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
          <Link href="/my-learning" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <UserCircle className="h-5 w-5" />
              <span className="text-xs">我的学习</span>
            </Button>
          </Link>
          <Link href="/learning-center" passHref>
            <Button variant="ghost" className="flex flex-col items-center gap-0.5">
              <BookOpen className="h-5 w-5" />
              <span className="text-xs">学习中心</span>
            </Button>
          </Link>
          <Button variant="ghost" className="flex flex-col items-center gap-0.5 bg-gray-100">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs">我的课程</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

