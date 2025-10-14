'use client'

import { useState } from 'react'

interface Item {
  id: string
  title: string
  description: string
  completed: boolean
  createdAt: Date
}

export default function GenericApp() {
  const [items, setItems] = useState<Item[]>([
    {
      id: '1',
      title: 'Welcome to your new app!',
      description: 'This is a generic application that can be customized for any purpose.',
      completed: false,
      createdAt: new Date()
    }
  ])

  const [newItem, setNewItem] = useState('')
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const addItem = () => {
    if (!newItem.trim()) return

    const item: Item = {
      id: Date.now().toString(),
      title: newItem,
      description: 'New item description',
      completed: false,
      createdAt: new Date()
    }

    setItems(prev => [...prev, item])
    setNewItem('')
  }

  const toggleItem = (id: string) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ))
  }

  const deleteItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const filteredItems = items.filter(item => {
    if (filter === 'all') return true
    if (filter === 'active') return !item.completed
    if (filter === 'completed') return item.completed
    return true
  })

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground">Generic Application</h1>
        <p className="text-muted-foreground">
          A flexible application that can be customized for any purpose
        </p>
      </div>

      <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-card-foreground">Add New Item</h2>
        <div className="flex gap-2">
          <input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter item title..."
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
            onKeyPress={(e) => e.key === 'Enter' && addItem()}
          />
          <button
            onClick={addItem}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
          >
            Add Item
          </button>
        </div>
      </div>

      <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
        <div className="flex gap-2 mb-4">
          <button
            onClick={() => setFilter('all')}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-3 py-1 ${filter === 'all' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
          >
            All ({items.length})
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-3 py-1 ${filter === 'active' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
          >
            Active ({items.filter(i => !i.completed).length})
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-3 py-1 ${filter === 'completed' ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
          >
            Completed ({items.filter(i => i.completed).length})
          </button>
        </div>

        <div className="space-y-2">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 p-3 border border-border rounded-lg bg-card"
            >
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleItem(item.id)}
                className="w-4 h-4"
              />
              <div className="flex-1">
                <h3 className={`font-medium ${item.completed ? 'line-through text-muted-foreground' : 'text-card-foreground'}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <button
                onClick={() => deleteItem(item.id)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No items found. Add your first item above!
          </div>
        )}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>This is a generic application template. Customize it for your specific needs!</p>
      </div>
    </div>
  )
}