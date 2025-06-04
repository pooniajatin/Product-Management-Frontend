import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('Bearer');
  
  let cloned=req
  if(token){
    cloned = req.clone({
      withCredentials: true,
      setHeaders :{
        Authorization: `Bearer ${token}`
      }
    })
  }
  else{
    cloned=req.clone({
      withCredentials:true
    })
  }
  return next(cloned);
};
