import ContactUs from "../models/contactUs.js";

export const createContactUs = async (req, res) => {
  try {
    const ContactUss = new ContactUs(req.body);
    await ContactUss.save();
    res.status(201).json({
      data: ContactUs,
      message: "new ContactUs created successfully",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

export const getContactUs = async (req, res) => {
  try {
    const ContactUss = await ContactUs.find();
    if (!ContactUss) {
      return res
        .status(200)
        .json({ message: "ContactUs not found", success: false });
    }
    res.status(200).json({
      data: ContactUss,
      message: "ContactUs successfully loaded",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};
