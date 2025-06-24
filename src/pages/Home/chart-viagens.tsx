import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const dias = Array.from({ length: 30 }, (_, i) => {
  const d = new Date()
  d.setDate(d.getDate() - (29 - i))
  return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })
})
const alunosPorDia = dias.map((date, i) => {
  const d = new Date()
  d.setDate(d.getDate() - (29 - i))
  const diaSemana = d.getDay()
  return {
    date,
    alunos: (diaSemana === 0 || diaSemana === 6) ? 0 : Math.floor(Math.random() * 50) + 10,
  }
})

export function ChartAlunosViagem() {
  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle>Alunos viajando por dia (últimos 30 dias)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full" style={{ height: 350 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={alunosPorDia}>
              <XAxis dataKey="date" stroke="#888888" tickLine={false} axisLine={false} dy={16} />
              <YAxis stroke="#888888" tickLine={false} axisLine={false} width={40} />
              <CartesianGrid className="!stroke-muted" vertical={false} />
              <Line type="linear" dataKey="alunos" stroke="#7c3aed" strokeWidth={2} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
} 