import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

interface Task {
  id: string
  text: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
}

export default function DailyPlanner() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        text: newTask.trim(),
        completed: false,
        priority
      }
      setTasks([...tasks, task])
      setNewTask('')
    }
  }

  const toggleTask = (id: string) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100 dark:bg-red-900'
      case 'medium': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900'
      case 'low': return 'text-green-600 bg-green-100 dark:bg-green-900'
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <Input
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <select
          className="h-10 px-3 py-2 border border-input bg-background rounded-md text-sm"
          value={priority}
          onChange={(e) => setPriority(e.target.value as 'low' | 'medium' | 'high')}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="space-y-3">
        {tasks.length === 0 ? (
          <Card>
            <CardContent className="p-6 text-center text-gray-500">
              No tasks yet. Add one above to get started!
            </CardContent>
          </Card>
        ) : (
          tasks.map(task => (
            <Card key={task.id} className={task.completed ? 'opacity-60' : ''}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="h-4 w-4"
                    />
                    <span className={task.completed ? 'line-through text-gray-500' : ''}>
                      {task.text}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                      {task.priority}
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {tasks.length > 0 && (
        <Card>
          <CardContent className="p-4">
            <div className="text-center text-sm text-gray-600">
              {tasks.filter(t => t.completed).length} of {tasks.length} tasks completed
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
