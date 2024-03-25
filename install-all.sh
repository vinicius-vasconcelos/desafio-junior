#!/bin/bash

# Função para instalar dependências em todos os diretórios
function installDependencies() {
  for dir in */; do
    if [ -e "$dir/package.json" ]; then
      echo "Instalando dependências em $dir"
      (cd "$dir" && npm install)
    fi
  done
}

# Executa a instalação de dependências a partir do diretório raiz
installDependencies
