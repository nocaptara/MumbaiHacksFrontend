'use client';
import { useState } from 'react'
import { Bell, Calendar, CheckCircle, Clock, Search, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cva, type VariantProps } from "class-variance-authority";


export default function page() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    
    <div className="container mx-auto p-6 pt-32">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Team Dashboard</h1>
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="transcript">Meeting Transcript</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Meetings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tasks Completed</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24/36</div>
                <Progress value={67} className="mt-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Team Performance</CardTitle>
                <User className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87%</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Deadline</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2 days</div>
                <p className="text-xs text-muted-foreground">Project X Launch</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="transcript" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Latest Meeting Transcript</CardTitle>
              <CardDescription>Team Sync - June 15, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between items-center mb-4">
                <Input placeholder="Search transcript..." className="max-w-sm" />
                <Button variant="outline">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
              <div className="space-y-4">
                <p><strong>John (10:05 AM):</strong> Let's review our progress on Project X.</p>
                <p><strong>Sarah (10:07 AM):</strong> I've completed the initial designs. I'll share them after the meeting.</p>
                <p className="bg-yellow-100 p-2 rounded"><strong>Action Item:</strong> Sarah to share Project X designs by EOD.</p>
                <p><strong>Mike (10:10 AM):</strong> Great! I've started on the backend implementation. We should be on track for the deadline.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>Track your team's progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Design homepage', 'Implement user authentication', 'Write API documentation', 'Set up CI/CD pipeline'].map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <div>
                      <p className="font-medium">{task}</p>
                      <p className="text-sm text-muted-foreground">Assigned to: Team Member {index + 1}</p>
                    </div>
                    <Badge variant={index % 2 === 0 ? "default" : "secondary"}>
                      {index % 2 === 0 ? 'In Progress' : 'Pending'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Collaboration</CardTitle>
              <CardDescription>Monitor individual progress and communication</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['Alice Johnson', 'Bob Smith', 'Charlie Davis', 'Diana Miller'].map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-2 border rounded">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarFallback>{member.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{member}</p>
                        <p className="text-sm text-muted-foreground">Last active: 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{3 - index} tasks</Badge>
                      <Button variant="ghost" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <div className='pt-72'></div>
    </div>
  )
}