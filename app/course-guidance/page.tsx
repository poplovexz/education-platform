import { Search, BookOpen, Lightbulb, Clock, Calendar, MessageCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { HomeIcon, Zap, UserCircle, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function CourseGuidance() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-indigo-50 min-h-screen pb-4">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
        </Link>
        <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png" alt="Course Guidance Logo" width={40} height={40} className="w-10" />
        <div className="flex-1 relative">
          <Input 
            type="search" 
            placeholder="搜索课程辅导" 
            className="w-full pl-10 pr-4 py-2 rounded-full bg-white"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </header>

      {/* Navigation Pills */}
      <div className="flex gap-2 px-4 overflow-x-auto no-scrollbar">
        <Badge variant="secondary" className="bg-blue-100 text-blue-500 hover:bg-blue-200">
          全部科目
        </Badge>
        <Badge variant="secondary" className="whitespace-nowrap">语文</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">数学</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">英语</Badge>
        <Badge variant="secondary" className="whitespace-nowrap">科学</Badge>
      </div>

      {/* Guidance Overview */}
      <div className="p-4">
        <Card className="p-4">
          <h3 className="font-bold mb-4">课程辅导概览</h3>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              <span className="text-xs">一对一辅导</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
              <Clock className="h-6 w-6 text-blue-500" />
              <span className="text-xs">课后答疑</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
              <Calendar className="h-6 w-6 text-green-500" />
              <span className="text-xs">预约辅导</span>
            </Button>
            <Button variant="outline" className="flex flex-col items-center gap-1 h-auto py-4">
              <MessageCircle className="h-6 w-6 text-purple-500" />
              <span className="text-xs">在线问答</span>
            </Button>
          </div>
        </Card>
      </div>

      {/* Available Tutors */}
      <div className="p-4 space-y-4">
        <h3 className="font-bold">推荐辅导老师</h3>
        <Card className="p-4">
          <div className="flex gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="李老师" 
              width={60} 
              height={60} 
              className="rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold">李老师</div>
              <div className="text-sm text-gray-600">数学 | 5年教学经验</div>
              <Badge variant="secondary" className="mt-2">擅长趣味教学</Badge>
            </div>
          </div>
          <Button className="w-full mt-4">预约辅导</Button>
        </Card>
        <Card className="p-4">
          <div className="flex gap-4">
            <Image 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
              alt="王老师" 
              width={60} 
              height={60} 
              className="rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="font-semibold">王老师</div>
              <div className="text-sm text-gray-600">英语 | 7年教学经验</div>
              <Badge variant="secondary" className="mt-2">口语专家</Badge>
            </div>
          </div>
          <Button className="w-full mt-4">预约辅导</Button>
        </Card>
      </div>

      {/* Study Tips */}
      <div className="p-4 bg-gradient-to-r from-indigo-100 to-blue-200 mx-4 rounded-lg mt-4">
        <h3 className="font-bold mb-4">学习小贴士</h3>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span>制定学习计划，合理安排时间</span>
          </li>
          <li className="flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span>多做练习，巩固所学知识</span>
          </li>
          <li className="flex items-start gap-2">
            <Lightbulb className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            <span>遇到不懂的问题及时请教老师</span>
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
          <Button variant="ghost" className="flex flex-col items-center gap-0.5 bg-gray-100">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs">课程辅导</span>
          </Button>
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

