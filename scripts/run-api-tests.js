// Script simples para testar a API (simula testes do Postman/Newman)

const BASE_URL = 'http://localhost:3000'

async function testHealthEndpoint() {
  console.log('🧪 Testando endpoint /api/health (GET)...')
  
  try {
    const response = await fetch(`${BASE_URL}/api/health`)
    const data = await response.json()
    
    if (response.status === 200 && data.status === 'ok') {
      console.log('✅ Teste GET /api/health: PASSOU')
      console.log('   Resposta:', data)
      return true
    } else {
      console.log('❌ Teste GET /api/health: FALHOU')
      return false
    }
  } catch (error) {
    console.log('❌ Erro ao testar GET /api/health:', error.message)
    return false
  }
}

async function testHealthPostEndpoint() {
  console.log('\n🧪 Testando endpoint /api/health (POST)...')
  
  try {
    const response = await fetch(`${BASE_URL}/api/health`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ test: 'data', timestamp: Date.now() })
    })
    const data = await response.json()
    
    if (response.status === 200 && data.status === 'success') {
      console.log('✅ Teste POST /api/health: PASSOU')
      console.log('   Resposta:', data)
      return true
    } else {
      console.log('❌ Teste POST /api/health: FALHOU')
      return false
    }
  } catch (error) {
    console.log('❌ Erro ao testar POST /api/health:', error.message)
    return false
  }
}

async function runAllTests() {
  console.log('🚀 Iniciando testes de API...\n')
  
  const results = []
  results.push(await testHealthEndpoint())
  results.push(await testHealthPostEndpoint())
  
  const passed = results.filter(r => r).length
  const total = results.length
  
  console.log('\n' + '='.repeat(50))
  console.log(`📊 Resultados: ${passed}/${total} testes passaram`)
  console.log('='.repeat(50))
  
  if (passed === total) {
    console.log('✅ Todos os testes de API passaram!')
    process.exit(0)
  } else {
    console.log('❌ Alguns testes falharam')
    process.exit(1)
  }
}

runAllTests()
