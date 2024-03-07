function Validator(options){
    // hàm thực hiện validate
    function validate(inputElement,element,errorElement)
    {
        // Lấy thẻ span cần hiển thị
        
        // Lấy dữ liệu từ 
        var errorMasage=element.test(inputElement.value);    
        if(errorMasage)
        {
            errorElement.innerText=errorMasage;
            errorElement.parentElement.classList.add('invalid');
            // inputElement.parentElement.classList.add('invalid');
        }
        else
        {
            errorElement.innerText='';
            errorElement.parentElement.classList.remove('invalid');
        }
    }
    // lấy element của form cần validate
    var formElement=document.querySelector(options.form); 
    if (formElement)
    {
         options.rules.forEach(element => {
           
            //lấy riêng các thẻ input từ form đã được truyền
            var inputElement=formElement.querySelector(element.selector);


            if(inputElement){
                var errorElement=inputElement.parentElement.querySelector(options.errorSelector);
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur=function(){
                    validate(inputElement,element,errorElement);
                }
                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput=function(){
                    errorElement.innerText='';
                    errorElement.parentElement.classList.remove('invalid');

                }
            }
         });
    }
}
//element.parentElement để lấy thẻ cha
//Nguyen tac cua rules
// Co loi thi tra ra message loi
//khi hop le thi ko tra 
Validator.isRequired=function(selector)
{
    return {
        selector : selector,
        test:function(value){
            return value.trim() ? undefined :'Vui lòng nhập trường này'
        }
    }
};
Validator.isEmail=function(selector)
{
    return{
    selector :selector,
        test:function(value){
            var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email';
            
        }
    }
};
Validator.minLength=function(selector,min)
{
    return{
        selector :selector,
            test:function(value){
               
                return value.length>= min ? undefined : 'Vui lòng nhập tối thiểu 6 kí tự';
                
            }
        }
}
