"use client";

import { useState } from "react";
import ubigeo from "@/data/ubigeo.json";
import { useLocationStore } from "@/hooks/use-location";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { LocateIcon } from "lucide-react";

export default function LocationSelector() {
  const { setLocation } = useLocationStore();

  const [departamento, setDepartamento] = useState("");
  const [provincia, setProvincia] = useState("");
  const [distrito, setDistrito] = useState("");

  const departamentos = ubigeo.map((d) => d.departamento);
  const provincias = ubigeo.find((d) => d.departamento === departamento)?.provincias ?? [];
  const distritos = provincias.find((p) => p.provincia === provincia)?.distritos ?? [];

  const handleSave = () => {
    if (!departamento || !provincia || !distrito) return alert("Completa todos los campos");
    setLocation(`${departamento} / ${provincia} / ${distrito}`);
    alert("Ubicación guardada");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Ubicación</Button>
      </PopoverTrigger>
      <PopoverContent className="w-96 space-y-4 dark:bg-gray-900">
        <div className="flex items-center space-x-2">
          <LocateIcon />
          <h2 className="font-medium">Ingrese su ubicación</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          Seleccione el departamento, provincia y distrito de entrega.
        </p>

        <Select onValueChange={setDepartamento} >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccione un departamento" />
          </SelectTrigger>
          <SelectContent className="w-full">
            {departamentos.map((dep) => (
              <SelectItem key={dep} value={dep}>
                {dep}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setProvincia} disabled={!departamento}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccione una provincia" />
          </SelectTrigger>
          <SelectContent className="w-full">
            {provincias.map((prov) => (
              <SelectItem key={prov.provincia} value={prov.provincia}>
                {prov.provincia}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select onValueChange={setDistrito} disabled={!provincia} >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccione un distrito" />
          </SelectTrigger>
          <SelectContent className="w-full">
            {distritos.map((dist) => (
              <SelectItem key={dist} value={dist}>
                {dist}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={handleSave} className="w-full">
          Guardar
        </Button>
      </PopoverContent>
    </Popover>
  );
}
