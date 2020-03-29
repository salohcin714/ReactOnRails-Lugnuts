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
wiper_blades.products.create(
    name: "Bosch Envision 24in Beam Wiper Blade",
    description: "Bosch Envision with Night Focus technology for sharpened night visibility and Clear Max 365 which creates an optimal wipe angle to minimize glare for safer driving. The NightBlack™ spoiler combines a light absorbing charcoal powder and water repelling polymer compound that reduces glare from reflective lights for enhanced visibility.",
    quantity: 10,
    cost: 20.00,
    retail: 29.99,
    image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/bos/EN24/image/3/"
)
wiper_blades.products.create(
    name: "Bosch Envision 22in Beam Wiper Blade",
    description: "Bosch Envision with Night Focus technology for sharpened night visibility and Clear Max 365 which creates an optimal wipe angle to minimize glare for safer driving. The NightBlack™ spoiler combines a light absorbing charcoal powder and water repelling polymer compound that reduces glare from reflective lights for enhanced visibility.",
    quantity: 10,
    cost: 20.00,
    retail: 29.99,
    image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/bos/EN22/image/3/"
)
wiper_blades.products.create(
    name: "Bosch Envision 20in Beam Wiper Blade",
    description: "Bosch Envision with Night Focus technology for sharpened night visibility and Clear Max 365 which creates an optimal wipe angle to minimize glare for safer driving. The NightBlack™ spoiler combines a light absorbing charcoal powder and water repelling polymer compound that reduces glare from reflective lights for enhanced visibility.",
    quantity: 10,
    cost: 20.00,
    retail: 29.99,
    image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/bos/EN20/image/3/"
)
wiper_blades.products.create(
    name: "Bosch Envision 19in Beam Wiper Blade",
    description: "Bosch Envision with Night Focus technology for sharpened night visibility and Clear Max 365 which creates an optimal wipe angle to minimize glare for safer driving. The NightBlack™ spoiler combines a light absorbing charcoal powder and water repelling polymer compound that reduces glare from reflective lights for enhanced visibility.",
    quantity: 10,
    cost: 20.00,
    retail: 27.99,
    image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/bos/EN19/image/3/"
)
wiper_blades.products.create(
    name: "Bosch Envision 18in Beam Wiper Blade",
    description: "Bosch Envision with Night Focus technology for sharpened night visibility and Clear Max 365 which creates an optimal wipe angle to minimize glare for safer driving. The NightBlack™ spoiler combines a light absorbing charcoal powder and water repelling polymer compound that reduces glare from reflective lights for enhanced visibility.",
    quantity: 10,
    cost: 20.00,
    retail: 27.99,
    image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/bos/EN18/image/3/"
)
wiper_blades.products.create(
    name: "Bosch Envision 17in Beam Wiper Blade",
    description: "Bosch Envision with Night Focus technology for sharpened night visibility and Clear Max 365 which creates an optimal wipe angle to minimize glare for safer driving. The NightBlack™ spoiler combines a light absorbing charcoal powder and water repelling polymer compound that reduces glare from reflective lights for enhanced visibility.",
    quantity: 10,
    cost: 20.00,
    retail: 29.99,
    image_url: "https://contentinfo.autozone
.com/znetcs/product-info/en/US/bos/EN17/image/3/"
)
wiper_blades.products.create(
    name: "Bosch Envision 16in Beam Wiper Blade",
    description: "Bosch Envision with Night Focus technology for sharpened night visibility and Clear Max 365 which creates an optimal wipe angle to minimize glare for safer driving. The NightBlack™ spoiler combines a light absorbing charcoal powder and water repelling polymer compound that reduces glare from reflective lights for enhanced visibility.",
    quantity: 10,
    cost: 20.00,
    retail: 27.99,
    image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/bos/EN16/image/3/"
)

batteries = ProductLine.create(
    name: "Car Batteries",
    description: "Get a dependable car battery from Lugnuts. With proven
tough coverage and premium performance, Lugnuts has the right car batteries
you need to stay on the road."
)

batteries.products.create(
    name: "Optima Battery D34-78",
    description: "Optima YellowTop Deep Cycle & Starting Battery for extreme
conditions where the battery performs deep cycle & starting jobs! Spill-proof AGM design can be mounted in most positions, is more vibration resistant & recharges faster than a standard battery.",
    quantity: 4,
    cost: 200.00,
    retail: 264.99,
    image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/jci/D34-78/image/3/"
)
batteries.products.create(
    name: "Optima Battery D51R",
    description: "Optima YellowTop Deep Cycle & Starting Battery for extreme
conditions where the battery performs deep cycle & starting jobs! Spill-proof
 AGM design can be mounted in most positions, is more vibration resistant &
recharges faster than a standard battery.",
    quantity: 4,
    cost: 200.00,
    retail: 237.99,
    image_url: "https://contentinfo.autozone.com/znetcs/product-info/en/US/jci/D51R/image/3/"
)