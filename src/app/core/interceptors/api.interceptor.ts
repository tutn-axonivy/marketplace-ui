import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export const apiInterceptor: HttpInterceptorFn = (req, next) => {
  const cloneReq = req.clone({ url: `${environment.apiUrl}/${req.url}` });
  return next(cloneReq);
};
