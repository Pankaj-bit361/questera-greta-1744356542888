import { motion } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiAward, FiTrendingUp } from 'react-icons/fi';

const features = [
  {
    name: 'Responsive Design',
    description: 'Looks great on any device',
    icon: FiMonitor,
  },
  {
    name: 'Mobile First',
    description: 'Built for the modern web',
    icon: FiSmartphone,
  },
  {
    name: 'Award Winning',
    description: 'Recognized for excellence',
    icon: FiAward,
  },
  {
    name: 'Performance',
    description: 'Lightning fast loading',
    icon: FiTrendingUp,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            We deliver exceptional results through innovative solutions
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div>
                  <span className="text-primary text-4xl">
                    <feature.icon />
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}