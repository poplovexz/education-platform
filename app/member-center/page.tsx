import { Search, UserCircle, CreditCard, Gift, Settings } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { HomeIcon, Zap, BookOpen, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function MemberCenter() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-blue-100 to-indigo-50 min-h-screen pb-4">
      {/* Header */}
      <header className="p-4 flex items-center gap-4">
        <Link href="/" passHref>
          <button className="text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
        </Link>
        <div className="flex-1 text-lg font-semibold">会员中心</div>
      </header>

      {/* User Info */}
      <div className="p-4">
        <Card className="p-4 flex items-center gap-4">
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NNB5zC6TU422hfhAiySMZokgQ11Pm0.png"
            alt="User Avatar" 
            width={60} 
            height={60} 
            className="rounded-full"
          />
          <div>
            <h2 className="font-bold text-lg">张三</h2>
            <p className="text-sm text-gray-600">会员等级：黄金会员</p>
          </div>
        </Card>
      </div>

      {/* Member Benefits */}
      <div className="p-4">
        <h3 className="font-bold mb-2">会员权益</h3>
        <div className="grid grid-cols-4 gap-2">
          <Button variant="outline" className="flex flex-col items-center p-2">
            <CreditCard className="h-6 w-6 text-blue-500 mb-1" />
            <span className="text-xs">会员卡</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center p-2">
            <Gift className="h-6 w-6 text-blue-500 mb-1" />
            <span className="text-xs">积分兑换</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center p-2">
            <BookOpen className="h-6 w-6 text-blue-500 mb-1" />
            <span className="text-xs">专属课程</span>
          </Button>
          <Button variant="outline" className="flex flex-col items-center p-2">
            <Settings className="h-6 w-6 text-blue-500 mb-1" />
            <span className="text-xs">设置</span>
          </Button>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="p-4">
        <h3 className="font-bold mb-2">学习进度</h3>
        <Card className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Python数据分析</span>
            <Badge>进行中</Badge>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
          </div>
          <p className="text-right text-sm text-gray-600 mt-1">45% 完成</p>
        </Card>
      </div>

      {/* Recent Activities */}
      <div className="p-4">
        <h3 className="font-bold mb-2">最近活动</h3>
        <Card className="p-4">
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>参与了"Web开发训练营"</span>
              <span className="text-sm text-gray-600">2天前</span>
            </li>
            <li className="flex justify-between items-center">
              <span>完成了"Python基础"课程</span>
              <span className="text-sm text-gray-600">1周前</span>
            </li>
          </ul>
        </Card>
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
          <Button variant="ghost" className="flex flex-col items-center gap-0.5 bg-gray-100">
            <UserCircle className="h-5 w-5" />
            <span className="text-xs">会员中心</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-0.5">
            <BookOpen className="h-5 w-5" />
            <span className="text-xs">学习中心</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center gap-0.5">
            <ShoppingCart className="h-5 w-5" />
            <span className="text-xs">我的课程</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

