Last login: Mon Jun 23 02:53:35 on ttys000
tranxuyen@MacBook-Air-cua-Tran ~ % cd ~/Desktop/htx-gpt-dialogflow-webhook
nano index.js





















  UW PICO 5.09                     File: index.js                     Modified  

  }
       
  let intentMap = new Map();
  intentMap.set('GPT_INTENT', handleGPT);
  agent.handleRequest(intentMap);
});
       
app.listen(PORT, () => {
  console.log(`✅ Server đang chạy tại http://localhost:${PORT}`);
}); 
        
       
  
  
  
       
       

  

^G Get Help  ^O WriteOut  ^R Read File ^Y Prev Pg   ^K Cut Text  ^C Cur Pos   
^X Exit      ^J Justify   ^W Where is  ^V Next Pg   ^U UnCut Text^T To Spell  
