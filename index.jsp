<%@page language="java" contentType="text/html; charset=utf-8" import="java.util.*, bookassist.control.SingletonFactory, com.bookassist.dao.*, com.bookassist.model.*, com.bookassist.manager.*, com.bookassist.manager.hotel.*, com.bookassist.manager.roomprice.PriceListOfRoomPriceManager" %><jsp:useBean id="conVal" class="bookassist.validation.Conduit" scope="request"/><%
%>
<!doctype html>
<html>
  <head>
     <script src="./build.js"></script>
   </head>
   <body>
    <div class="row">
      <div class="col-md-6 col-sm-6 col-xs-6">
        <h1>Bookassist Superadmin</h1>
        <% String serverName = request.getServerName();
        if (serverName.startsWith("test") || serverName.startsWith("demo") || serverName.startsWith("localhost")){
          if(serverName.indexOf(".")>0){
            serverName = serverName.substring(0,serverName.indexOf("."));
          } %>
          <div id="server">
            <%=serverName %>!
          </div>
        <% } %>
      </div>
    </div>
    <%@include file="/bookassist_admin/headernavbs.jsp"%>
    <%@include file="/bookassist_admin/hotelnavbs.jsp"%>
     <div id="root"></div>
   </body>
</html>

