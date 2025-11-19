import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'Task Manager API',
    version: '1.0.0'
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    return NextResponse.json({
      status: 'success',
      message: 'Request received',
      data: body
    })
  } catch (error) {
    return NextResponse.json(
      { status: 'error', message: 'Invalid JSON' },
      { status: 400 }
    )
  }
}
