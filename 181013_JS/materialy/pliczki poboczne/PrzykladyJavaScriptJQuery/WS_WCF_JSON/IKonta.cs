using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Text;

namespace WS_WCF_JSON
{
    [ServiceContract]
    public interface IKonta
    {
        [OperationContract]
        [WebInvoke(Method="GET",ResponseFormat=WebMessageFormat.Json,BodyStyle=WebMessageBodyStyle.Wrapped,UriTemplate = "KontoIstnieje/{login}")]
        bool KontoIstnieje(string login);

        [OperationContract]
        [WebInvoke(Method = "POST", ResponseFormat = WebMessageFormat.Json, RequestFormat=WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped, UriTemplate = "SilaHasla")]
        string SilaHasla(string haslo);
    }
}
