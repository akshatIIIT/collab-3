import React, { PureComponent } from 'react';

export class Testimonials extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const testimonials = [
      {
        color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
        name: 'John',
        handle: '@john',
        testimonial: "I'm at a loss for words. This is amazing. I love it.",
      },
      {
        color: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        name: 'Jane',
        handle: '@jane',
        testimonial: 'This platform has completely transformed how I work.',
      },
      {
        color: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
        name: 'Alice',
        handle: '@alice',
        testimonial: 'The features and design are top-notch!',
      },
      {
        color: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        name: 'Bob',
        handle: '@bob',
        testimonial: 'I have never seen something like this before.',
      },
      {
        color: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
        name: 'Charlie',
        handle: '@charlie',
        testimonial: 'Absolutely wonderful experience using this.',
      },
      {
        color: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
        name: 'Dana',
        handle: '@dana',
        testimonial: 'I would highly recommend this to everyone.',
      },
      {
        color: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
        name: 'Evan',
        handle: '@evan',
        testimonial: 'This has exceeded my expectations in every way.',
      },
    ];

    const marqueeClassName = this.state.isHovered ? 'marquee paused' : 'marquee';

    return (
      <div
        className="h-52 w-full overflow-hidden relative mt-15 -mb-5 md:-mb-1"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className={`absolute whitespace-nowrap flex ${marqueeClassName}`}>
          {testimonials.concat(testimonials).map((item, index) => (
            <div
              key={index}
              className="box flex items-center h-36 w-80 mx-4"
              style={{ minWidth: '500px' }}
            >
              <div
                className="color-grid h-12 w-12 rounded-full mr-4"
                style={{ background: item.color }}
              ></div>
              <div className="text-left">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">{item.handle}</p>
                <p className="text-sm text-gray-700">{item.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
        <style jsx>{`
          @keyframes marquee {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .marquee {
            animation: marquee 22s linear infinite;
          }

          .marquee.paused {
            animation-play-state: paused; /* Pauses the animation */
          }

          .box {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            overflow: hidden;
            background-color: white;
            border-radius: 12px;
            padding: 16px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease;
          }

          .box:hover {
            background-color: #f0f0f0;
             /* Grey background on hover */
          }

          .color-grid {
            transition: transform 0.3s ease-in-out;
          }

          .box p {
            margin: 0;
          }
        `}</style>
      </div>
    );
  }
}

export default Testimonials;