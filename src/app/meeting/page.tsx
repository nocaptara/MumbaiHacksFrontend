"use cilent";

import { useState } from 'react'
import { Calendar, CheckCircle, Clock, Edit, MoreHorizontal, Plus, Search } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MeetingSummariesPage() {
  // const [activeTab, setActiveTab] = useState('overview')

  const meetings = [
    { id: 1, title: "Project Kickoff", date: "2023-06-15", summary: "Discussed project goals, timeline, and team responsibilities.", participants: ["Alice", "Bob", "Charlie"] },
    { id: 2, title: "Design Review", date: "2023-06-18", summary: "Reviewed initial designs, provided feedback on user interface.", participants: ["Alice", "Diana", "Eva"] },
    { id: 3, title: "Sprint Planning", date: "2023-06-20", summary: "Planned tasks for the upcoming sprint, assigned story points.", participants: ["Bob", "Charlie", "Frank"] },
  ]

  const followUps = [
    { id: 1, task: "Create project timeline", assignee: "Alice", status: "In Progress", dueDate: "2023-06-25" },
    { id: 2, task: "Revise UI mockups", assignee: "Diana", status: "Pending", dueDate: "2023-06-28" },
    { id: 3, task: "Set up development environment", assignee: "Charlie", status: "Completed", dueDate: "2023-06-22" },
    { id: 4, task: "Draft API documentation", assignee: "Bob", status: "In Progress", dueDate: "2023-06-30" },
  ]

  return (
    <div className="container mx-auto p-6 pt-32">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-primary">Meeting Summaries & Follow-ups</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Meeting
        </Button>
      </header>

      <Tabs className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="recent">Recent Meetings</TabsTrigger>
            <TabsTrigger value="followups">Follow-ups</TabsTrigger>
          </TabsList>
          <div className="flex items-center space-x-2">
            <Input placeholder="Search..." className="max-w-sm" />
            <Button variant="outline" size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <TabsContent value="recent" className="space-y-4">
          {meetings.map((meeting) => (
            <Card key={meeting.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{meeting.title}</CardTitle>
                    <CardDescription>
                      <Calendar className="inline-block mr-1 h-4 w-4" />
                      {meeting.date}
                    </CardDescription>
                  </div>
                  {/* <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" /> Edit Summary
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Full Transcript</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Delete Meeting</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu> */}
                </div>
              </CardHeader>
              <CardContent>
                <p>{meeting.summary}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Participants:</span>
                  {meeting.participants.map((participant, index) => (
                    <Avatar key={index} className="w-6 h-6">
                      <AvatarFallback>{participant[0]}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="followups" className="space-y-4">
          {followUps.map((task) => (
            <Card key={task.id}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{task.task}</CardTitle>
                    <CardDescription>
                      Assigned to: {task.assignee}
                    </CardDescription>
                  </div>
                  <Badge variant={task.status === "Completed" ? "default" : task.status === "In Progress" ? "secondary" : "outline"}>
                    {task.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Due: {task.dueDate}</span>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full">
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" /> Update Status
                  </Button>
                  {task.status !== "Completed" && (
                    <Button variant="outline" size="sm">
                      <CheckCircle className="mr-2 h-4 w-4" /> Mark as Completed
                    </Button>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
// export const useClient = true;