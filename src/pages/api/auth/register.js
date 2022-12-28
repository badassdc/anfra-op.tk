export default async (req, res) => {
    const { ref } = req.query;

    if (!ref){
        res.redirect('https://discord.gg/d5kKHRn53S');
    } else {
        res.redirect(`https://discord.gg/d5kKHRn53S?ref=${ref}`);
    }
}