

=begin
Product.create([
                  {
                       name: "Optima Battery D51R",
                       product_line_id: 2,
                       description: "Optima YellowTop Deep Cycle & Starting Battery for extreme conditions where the battery performs deep cycle & starting jobs! Spill-proof AGM design can be mounted in most positions, is more vibration resistant & recharges faster than standard batteries.",
                       quantity: 5,
                       cost: 189.75,
                       retail: 237.99,
                       image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/jci/D51R/image/3/"
                   },
                   {
                       name: "Bosch Envision 26in Beam Wiper Blade",
                       product_line_id: 1,
                       description: "Bosch Envision with Night Focus technology for sharpened night visibility and Clear Max 365 which creates an optimal wipe angle to minimize glare for safer driving. The NightBlack™ spoiler combines a light absorbing charcoal powder and water repelling polymer compound that reduces glare from reflective lights for enhanced visibility.",
                       quantity: 10,
                       cost: 20.00,
                       retail: 29.99,
                       image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/bos/EN26/image/3/"
                   },
                   {
                       name: "Autolite XP Iridium Spark Plug XP5682",
                       product_line_id: 3,
                       description: "Autolite has over 100 years of engineering experience and has sold over 11 billion plugs. Designed and engineered in the USA, Autolite platinum spark plugs provide a center wire platinum firing tip which provides reduced gap erosion, fewer misfires, better performance and increased durability. Consider upgrading to Autolite double platinum or iridium XP spark plugs for increased performance. Autolite is an official NASCAR performance partner.",
                       quantity: 9,
                       cost: 2.50,
                       retail: 7.99,
                       image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/aut/XP5682/image/3/"
                   }
               ])
=end

AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

wiper_blades = ProductLine.create(
    name: "Windshield Wiper Blades",
    description: "It's good to have the best in life, especially when it comes to wiper blades. A set of good windshield wipers make seeing the road ahead easy, even in a downpour. That's because your blades are optimally designed to remove water and debris from your windshield to give you crystal-clear visibility in any driving conditions. These wipers are built to last with heavy-duty materials, so you can spend less time changing them out and rest easy knowing you can keep your windshield clean."
)

wiper_blades.products.create(
    name: "Bosch Envision 26in Beam Wiper Blade",
    description: "Bosch Envision with Night Focus technology for sharpened night visibility and Clear Max 365 which creates an optimal wipe angle to minimize glare for safer driving. The NightBlack™ spoiler combines a light absorbing charcoal powder and water repelling polymer compound that reduces glare from reflective lights for enhanced visibility.",
    quantity: 10,
    cost: 20.00,
    retail: 29.99,
    image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/bos/EN26/image/3/"
)