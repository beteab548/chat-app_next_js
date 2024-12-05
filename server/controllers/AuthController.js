//logic to check if the user already exists in the database by calling the prisma client insatance
import getPrismaInstance from "../utils/PrismaClient";
export const checkAuth = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.json({ message: "Email is required", status: false });
  } else {
    const prisma = getPrismaInstance();
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      return res.json({
        message: "found user logged",
        status: true,
        data: user,
      });
    } else {
      return res.json({ message: "no user found ", status: false });
    }
  }
};
