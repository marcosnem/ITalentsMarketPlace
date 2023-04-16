# ITalentsMarketPlace

Curso de Backend ITalents - Módulo 2 - Atividade Final

## Instalação

1. Baixe todo o codigo
2. Abra o terminal VS Code
3. Execute: npm i
4. Rode o ambiente dev: npm run dev

## Endepoints

Todas os endpoints da nossa aplicação serão  listados abaixo:

### Usuário

###### /findById


| Codigo | Resposta                                         |
| :------- | :------------------------------------------------- |
| 200    | Retorna um usuário válido                      |
| 400    | Retorna mensagem informando o erro               |
| 401    | Retorna o erro de autenticação                 |
| 500    | Retorna informando que não encontrou o usuário |

```javascript
const findUserByIdController = async (req,res) => {
try{
  
   const user = await userService.findUserByIdService(req.params.id);

   if(!user) {
    return res.status(404).send({message: "Usuário não encontrado"});
   }

   return res.status(200).send(user);

}catch (err){

    if(err.kind == "ObjectId"){
     
        return res.status(400).send({message: `ID incorreto, tente novamente`});
    }
  
    console.log(`erro: ${err.message}`);

    return res.status(500).send({message: `Erro inesperado, tente novamente!`});
   
}

};
```

### Produto

Todos o endpoints de produtos listados abaixo:
