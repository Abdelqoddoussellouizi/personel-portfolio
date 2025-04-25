import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet("/contact")
public class ContactServlet extends HttpServlet {
  protected void doPost(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
    String name = request.getParameter("name");
    String message = request.getParameter("message");

    response.setContentType("text/html");
    PrintWriter out = response.getWriter();
    out.println("<h1>Thank you, " + name + "!</h1>");
    out.println("<p>Your message: " +message  + "</p>");
  }
}
