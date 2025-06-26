import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/api/user';
import { MotoristaLayout } from '@/components/ui/motorista-layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader as DialogHeaderDialog, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Clock,
  Users,
  MapPin,
  Phone,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  CircleDashed,
  Bus,
} from 'lucide-react';

export function MotoristaPage() {
  const { data: user } = useQuery({
    queryKey: ['user'],
    queryFn: () => getUser(),
  });


  return (
    <MotoristaLayout>
      <div className="flex flex-col gap-6 max-w-6xl mx-auto w-full px-2 sm:px-4">
        {/* Rota de Hoje */}
        <Card className="bg-green-50/60 border-green-100 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                <span className="inline-flex items-center gap-2 text-green-700 font-semibold">
                  <ArrowRight size={18} className="text-green-600" /> Rota de Hoje
                </span>
              </CardTitle>
              <CardDescription className="text-green-700 mt-1">
                quinta-feira, 26 de junho de 2025
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-green-700 border border-green-200 font-medium">Aguardando</span>
            </div>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 pb-0">
            <div className="flex flex-col items-center justify-center bg-blue-50 rounded-lg py-2">
              <Clock size={20} className="text-blue-600 mb-1" />
              <span className="text-xs text-gray-500">Saída</span>
              <span className="font-bold text-lg text-blue-900">17:50</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-purple-50 rounded-lg py-2">
              <Users size={20} className="text-purple-600 mb-1" />
              <span className="text-xs text-gray-500">Alunos</span>
              <span className="font-bold text-lg text-purple-900">12/16</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-green-50 rounded-lg py-2">
              <MapPin size={20} className="text-green-600 mb-1" />
              <span className="text-xs text-gray-500">Destino</span>
              <span className="font-bold text-base text-green-900">UEG - Santa Helena de Goiás</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-4">
            <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold">
              Iniciar Rota
            </Button>
          </CardFooter>
        </Card>

        {/* Grid de informações principais */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Veículo */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Bus size={18} className="text-blue-600" /> Seu Veículo
              </CardTitle>
              <CardDescription>Informações do veículo designado</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              <div>
                <span className="font-semibold">Veículo</span><br />
                <span className="text-gray-700">ABC-1234 - Mercedes Sprinter</span>
              </div>
              <div>
                <span className="font-semibold">Capacidade</span><br />
                <span className="text-gray-700">20 alunos</span>
              </div>
              <div>
                <span className="font-semibold">CNH</span><br />
                <span className="text-gray-700">12345678901</span>
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full flex items-center gap-2">
                    <Phone size={16} /> Contato de Emergência
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeaderDialog>
                    <DialogTitle>Contato de Emergência</DialogTitle>
                    <DialogDescription>
                      Ligue para o gestor responsável em caso de emergência.
                    </DialogDescription>
                  </DialogHeaderDialog>
                  <div className="flex flex-col gap-2 mt-2">
                    <span className="font-semibold">Gestor Responsável:</span>
                    <span>Maria Souza</span>
                    <span className="font-semibold mt-2">Telefone:</span>
                    <span>(31) 99999-9999</span>
                  </div>
                  <Button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white" onClick={() => window.open('tel:31999999999', '_self')}>
                    <Phone size={16} /> Ligar agora
                  </Button>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>

          {/* Paradas */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-900">
                <MapPin size={18} className="text-orange-600" /> Paradas (3)
              </CardTitle>
              <CardDescription>Sequência de paradas da rota</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-2">
              {/* Parada 1 */}
              <div className="rounded-lg border px-3 py-2 flex items-center gap-3 bg-white">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Ana Silva</div>
                  <div className="text-xs text-gray-500">Rua A, 123</div>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-blue-600" />
                  <span className="text-xs font-medium text-blue-900">07:05</span>
                </div>
              </div>
              {/* Parada 2 */}
              <div className="rounded-lg border px-3 py-2 flex items-center gap-3 bg-white">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>JS</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">João Santos</div>
                  <div className="text-xs text-gray-500">Rua B, 456</div>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-blue-600" />
                  <span className="text-xs font-medium text-blue-900">07:10</span>
                </div>
              </div>
              {/* Parada 3 */}
              <div className="rounded-lg border px-3 py-2 flex items-center gap-3 bg-white">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>PC</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">Pedro Costa</div>
                  <div className="text-xs text-gray-500">Rua D, 321</div>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-blue-600" />
                  <span className="text-xs font-medium text-blue-900">07:15</span>
                </div>
              </div>
              {/* Destino Final */}
              <div className="rounded-lg border px-3 py-2 flex items-center gap-3 bg-green-50">
                <MapPin size={20} className="text-green-600" />
                <div className="flex-1">
                  <div className="font-semibold text-green-900">Destino Final</div>
                  <div className="text-xs text-green-700">E.M. Centro</div>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} className="text-green-700" />
                  <span className="text-xs font-medium text-green-900">07:45</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Ações Rápidas */}
        <Card>
          <CardHeader>
            <CardTitle className="text-gray-900">Ações Rápidas</CardTitle>
            <CardDescription>Funcionalidades úteis durante a rota</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <Button variant="outline" className="flex-1 flex items-center gap-2 justify-center">
              <Phone size={16} /> Ligar para Gestor
            </Button>
            <Button variant="outline" className="flex-1 flex items-center gap-2 justify-center">
              <AlertTriangle size={16} /> Reportar Problema
            </Button>
            <Button variant="outline" className="flex-1 flex items-center gap-2 justify-center">
              <CircleDashed size={16} /> Marcar Atraso
            </Button>
          </CardContent>
        </Card>
      </div>
    </MotoristaLayout>
  );
} 