<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="IndexRebuild.aspx.cs" Inherits="Sitecore.Demo.Edge.Website.Utilities.IndexRebuild" %>
<%@ Register TagPrefix="sc" Namespace="Sitecore.Web.UI.WebControls" Assembly="Sitecore.Kernel" %>
<%@ Import Namespace="Sitecore.Globalization" %>

<!DOCTYPE html>
<html>
<head runat="server">
  <title>Rebuild Index</title>
  <link rel="shortcut icon" href="/sitecore/images/favicon.ico" />
  <sc:PlatformFontStylesLink runat="server"/>

</head>
<body>
  <form runat="server" class="wf-container" id="indexform">
      <div class="wf-content">
        <h1>Rebuild Index</h1>
        <asp:PlaceHolder ID="ErrorMessage" runat="server" />
        <div class="login-form">
          <asp:TextBox ID="LoginTextBox" CssClass="wf-watermarked" ToolTip="Index Name" runat="server" Text="" /> 
          <asp:Button runat="server" ID="RebuildIndexButton" Text="Rebuild" OnClick="RebuildIndexButton_OnClick" />
        </div>
      </div>
      <div class="wf-content" style="padding: 2em 100px 0 32px;">
          <asp:Literal runat="server" ID="IndexRebuilding" Visible="False">Index is rebuilding</asp:Literal>
          <asp:Literal runat="server" ID="IndexNotFound" Visible="False">Index was not found</asp:Literal>
          <asp:Literal runat="server" ID="IndexRebuildError" Visible="False"/>
      </div>
  </form>
</body>
</html>
