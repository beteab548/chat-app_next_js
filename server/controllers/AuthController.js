//logic to check if the user already exists in the database by calling the prisma client insatance
import getPrismaInstance from "../utils/PrismaClient.js";
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
export const onBoardUser = async (req, res, next) => {
  try {
    const { email, name, bio, image: profilePicture } = req.body;
    if (!email || !name || !profilePicture) {
      return res.send("email, name and image are required.");
    }
    const prisma = getPrismaInstance();
    const data = await prisma.user.update({
      where: { email: email },
      data: { email, name, bio, profilePicture },
    });
    res.json({ status: true, data: data });
  } catch (err) {
    next(err);
    console.log(err);
  }
};
export const getAllUsers = async (req, res, next) => {
  try {
    const prisma = getPrismaInstance();
    const user = await prisma.user.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        email: true,
        name: true,
        profilePicture: true,
        bio: true,
      },
    });
    const userGroupedByInitialLetter = {};
    user.forEach((user) => {
      const initalLetter = user.name.charAt(0).toUpperCase();
      if (!userGroupedByInitialLetter[initalLetter]) {
        userGroupedByInitialLetter[initalLetter] = [];
      }
      userGroupedByInitialLetter[initalLetter].push(user);
    });
    return res.status(200).send({ users: userGroupedByInitialLetter });
  } catch (err) {
    next(err);
    console.log(err);
  }
};
