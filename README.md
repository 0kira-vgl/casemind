## Navegação & Rotas

Devido ao tempo limitado durante o desafio, nem todas as páginas estão conectadas por elementos visíveis de navegação (como botões, links ou menus).

No entanto, todas as páginas estão devidamente estruturadas e podem ser acessadas diretamente via URL.

Este projeto utiliza o **App Router do Next.js**, onde cada pasta dentro de `src/app` representa uma rota.  
Para acessar uma página específica, basta adicionar o nome da rota após a URL base.

### Exemplo

Dada a seguinte estrutura de pastas:

```
src/app/dashboard/page.tsx
```

Você pode acessar essa página diretamente em:

```
http://localhost:3000/dashboard
```

A mesma lógica se aplica a qualquer outra pasta dentro de `src/app`.  
Mesmo que uma página ainda não esteja acessível pela interface (UI), ela já está implementada e pode ser acessada diretamente pelo navegador através da URL.
