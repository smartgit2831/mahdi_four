        const container = document.getElementById('container');
        const score = document.querySelector('.score');
        const color = ['red', 'blue', 'pink', 'yellow', 'gray', 'brown'];
        let squarcount = 16;
        let colors = color[Math.floor(Math.random() * color.length)];
        let one_colors = '';
        if(colors == 'red'){
            one_colors = 'rgb(177, 68, 68)';
        }else if(colors == 'blue'){
            one_colors = 'rgb(35, 35, 156)';
        }else if(colors == 'pink'){
            one_colors = 'rgb(204, 164, 171)';
        }else if(colors == 'yellow'){
            one_colors = 'rgb(219, 219, 89)';
        }else if(colors == 'gray'){
            one_colors = 'rgb(158, 155, 155)';
        }else if(colors == 'brown'){
            one_colors = 'rgb(85, 29, 29)';
        }
        const forsat = document.querySelector('.forsat');
        let game_over=3;
        forsat.innerText = game_over;
        forsat.style.padding = '12px';
        for(let i=0; i<squarcount; i++){
            const squar = document.createElement('div');
            squar.classList.add("squar");
            squar.style.background = colors;
            container.appendChild(squar);
            squar.addEventListener('click', function(){
                if(squar.style.background != one_colors){
                    game_over--;
                    forsat.innerText = game_over;
                }
                console.log(game_over);
                if(game_over == 0){
                    Alert_game_over();
                }
            })
        }
        let squar_random = document.querySelectorAll('.squar');
        let squar_random1 = squar_random[Math.floor(Math.random() * squar_random.length)];
        squar_random1.style.background = one_colors;
        squar_random1.addEventListener('click', next_level);
        const Alert = document.querySelector('.alert');
        const sath = document.querySelector('.sath');
        const Boddy = document.querySelector('.Body');
        const aler_h4 = document.querySelector('.aler_h4');
        const Play = document.querySelector('.play');
        function Alert_game_over(){
            aler_h4.innerText = 'Game Over'
            Alert.style.display = 'block';
            Boddy.style.opacity = '0.03';
            sath.innerText = num;
            container.style.display = 'none';
            Play.addEventListener('click', function(){
                window.location.reload();
            });
        }
        function Alert_victory(){
            aler_h4.innerText = 'Victory';
            Alert.style.display = 'block';
            Boddy.style.opacity = '0.03';
            sath.innerText = num;
            container.style.display = 'none';
            Play.addEventListener('click', function(){
                window.location.reload();
            });
        }
        let num = 0;
        function next_level(){
            for(let i=0; i<squarcount; i++){
                let squar = document.querySelector('.squar');
                squar.classList.remove("squar");
                container.removeChild(squar);
            }
            const color = ['red', 'blue', 'pink', 'yellow', 'gray', 'brown']; 
            let colors = color[Math.floor(Math.random() * color.length)];
            let one_colors = '';
            if(colors == 'red'){
                one_colors = 'rgb(177, 68, 68)';
            }else if(colors == 'blue'){
                one_colors = 'rgb(35, 35, 156)';
            }else if(colors == 'pink'){
                one_colors = 'rgb(204, 164, 171)';
            }else if(colors == 'yellow'){
                one_colors = 'rgb(219, 219, 89)';
            }else if(colors == 'gray'){
                one_colors = 'rgb(158, 155, 155)';
            }else if(colors == 'brown'){
                one_colors = 'rgb(85, 29, 29)';
            }
            num = num + 1;
            for(let i=0; i<squarcount; i++){
                let squar = document.createElement('div');
                squar.classList.add("squar");
                squar.style.background = colors;
                container.appendChild(squar);
                squar.addEventListener('click', function(){
                    if(squar.style.background != one_colors){
                        game_over--;
                        forsat.innerText = game_over;
                    }
                    console.log(game_over);
                    if(game_over == 0){
                        Alert_game_over();
                    }
                }) 
                if(num == 0){
                    squar.style.width = '45px';
                    squar.style.height = '45px';
                }else if(num == 1){
                    squar.style.width = '43px';
                    squar.style.height = '43px';
                    container.style.width = '203px';
                }else if(num == 2){
                    squar.style.width = '40px';
                    squar.style.height = '40px';
                    container.style.width = '180px';
                }else if(num == 3){
                    squar.style.width = '38px';
                    squar.style.height = '38px';
                    container.style.width = '190px';
                }else if(num == 4){
                    squar.style.width = '35px';
                    squar.style.height = '35px';
                    container.style.width = '190px';
                }else if(num == 5){
                    squar.style.width = '33px';
                    squar.style.height = '33px';
                    container.style.paddingLeft = '10px';
                    container.style.width = '180px';
                }else if(num == 6){
                    squar.style.width = '30px';
                    squar.style.height = '30px';
                    container.style.paddingLeft = '20px';
                    container.style.width = '165px';
                }else if(num == 7){
                    squar.style.width = '28px';
                    squar.style.height = '28px';
                    container.style.paddingLeft = '30px';
                    container.style.width = '155px';
                }else if(num == 8){
                    squar.style.width = '25px';
                    squar.style.height = '25px';
                    container.style.paddingLeft = '40px';
                    container.style.width = '140px';
                }else if(num == 9){
                    squar.style.width = '23px';
                    squar.style.height = '23px';
                    container.style.width = '134px';
                }else if(num == 10){
                    squar.style.width = '20px';
                    squar.style.height = '20px';
                    container.style.width = '118px';
                }else if(num == 11){
                    squar.style.width = '18px';
                    squar.style.height = '18px';
                    container.style.paddingLeft = '50px';
                    container.style.width = '93px';
                }else if(num == 12){
                    squar.style.width = '15px';
                    squar.style.height = '15px';
                    container.style.width = '93px';
                }else if(num == 13){
                    squar.style.width = '13px';
                    squar.style.height = '13px';
                    container.style.width = '84px';
                }else if(num == 14){
                    squar.style.width = '10px';
                    squar.style.height = '10px';
                    container.style.paddingLeft = '63px';
                    container.style.width = '68px';
                }else if(num == 15){
                    squar.style.width = '8px';
                    squar.style.height = '8px';
                    container.style.width = '58px';
                }else if(num == 16){
                    squar.style.width = '5px';
                    squar.style.height = '5px';
                    container.style.width = '44px';
                }else if(num == 17){
                    squar.style.width = '3px';
                    squar.style.height = '3px';
                    container.style.width = '33px';
                }else if(num == 18){
                    squar.style.width = '1px';
                    squar.style.height = '1px';
                    container.style.paddingLeft = '84px';
                    container.style.width = '24px';
                }else if(num == 19){
                    squar.style.width = '1px';
                    squar.style.height = '1px';
                    container.style.paddingLeft = '84px'
                    container.style.width = '21px';
                }else if(num == 20){
                    Alert_victory();
                    num = num * 0;
                }
                score.innerText = num;
                score.style.padding = '12px';
            }
            let squar_random = document.querySelectorAll('.squar');
            let squar_random1 = squar_random[Math.floor(Math.random() * squar_random.length)];
            squar_random1.style.background = one_colors;

            squar_random1.addEventListener('click', next_level);
        }
