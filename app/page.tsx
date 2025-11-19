'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Trash2 } from 'lucide-react'

interface Task {
  id: number
  text: string
  completed: boolean
}

export default function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [inputValue, setInputValue] = useState('')

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }])
      setInputValue('')
    }
  }

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Gerenciador de Tarefas
            </CardTitle>
            <CardDescription className="text-center">
              Organize suas atividades diárias
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Input de Nova Tarefa */}
            <div className="flex gap-2" data-cy="add-task-section">
              <Input
                data-cy="task-input"
                type="text"
                placeholder="Digite uma nova tarefa..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addTask()}
                className="flex-1"
              />
              <Button 
                data-cy="add-task-button"
                onClick={addTask}
              >
                Adicionar
              </Button>
            </div>

            {/* Lista de Tarefas */}
            <div className="space-y-2" data-cy="task-list">
              {tasks.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  Nenhuma tarefa adicionada ainda
                </p>
              ) : (
                tasks.map((task) => (
                  <div
                    key={task.id}
                    data-cy="task-item"
                    data-task-id={task.id}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Checkbox
                      data-cy="task-checkbox"
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                    />
                    <span
                      data-cy="task-text"
                      className={`flex-1 ${
                        task.completed ? 'line-through text-muted-foreground' : ''
                      }`}
                    >
                      {task.text}
                    </span>
                    <Button
                      data-cy="delete-task-button"
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteTask(task.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                ))
              )}
            </div>

            {/* Contador de Tarefas */}
            {tasks.length > 0 && (
              <div className="pt-4 border-t text-sm text-muted-foreground flex justify-between">
                <span data-cy="task-count">Total: {tasks.length} tarefas</span>
                <span data-cy="completed-count">
                  Concluídas: {tasks.filter(t => t.completed).length}
                </span>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
